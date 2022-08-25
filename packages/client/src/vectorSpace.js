import commonWords from './common.js';

// VS adds key words to object identified by key
// VS accepts search string and finds the best matches

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

  search(search) {
    const query = search.toLowerCase().split(' ');
    const out = [];
    for (const entry of this.space) {
      const found = query.some(word => entry.words.includes(word));
      if (found) out.push(entry);
    }
    console.log(out);
  }

}

export default VectorSpace;
