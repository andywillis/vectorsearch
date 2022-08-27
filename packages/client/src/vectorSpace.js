import commonWords from './words/common.js';

class VectorSpace {

  dictionary = [];

  space = [];

  static lowerCaseWord(word) {
    return word.toLowerCase();
  }

  static notCommonWord(word) {
    return !commonWords.includes(word);
  }

  static removePunctuation(str) {
    return str.replace(/[^\p{L}\s]/gu, '');
  }

  static sortByWord(a, b) {
    return a.localeCompare(b);
  }

  static filterWords(str) {
    return VectorSpace.removePunctuation(str)
      .split(/\b\s{1,}\b/g)
      .filter(VectorSpace.notCommonWord)
      .map(VectorSpace.lowerCaseWord)
      .sort(VectorSpace.sortByWord);
  }

  updateDictionary(words) {
    const merged = [ ...this.dictionary, ...words ];
    this.dictionary = merged.sort(VectorSpace.sortByWord);
  }

  addPost({ title, post }) {
    const words = VectorSpace.filterWords(post);
    this.space.push({ title, words });
    this.updateDictionary(words);
  }

  filterAndVector(query) {
    const entries = [];
    for (const entry of this.space) {
      const found = query.some(word => entry.words.includes(word));
      if (found) entries.push(entry);
    }
    return entries;
  }

  search(search) {
    const query = search.toLowerCase().split(' ');
    const vectored = this.filterAndVector(query);
    console.log(vectored);
  }

}

export default VectorSpace;
