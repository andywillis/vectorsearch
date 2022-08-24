import commonWords from './common.js';

// Write post
// Submit post to VS
// VS finds keys words (removes common words)
// VS adds key words to object identified by key
// VS accepts search string and finds the best matches

class VectorSpace {

  space = {};

  static lowerCaseWord(word) {
    return word.toLowerCase();
  }

  static notCommonWord(word) {
    return !commonWords.includes(word);
  }

  static removePunctuation(str) {
    return str.replace(/[^\p{L}\s]/gu, '');
  }

  static filterWords(str) {
    return VectorSpace.removePunctuation(str)
      .split(/\b\s{1,}\b/g)
      .filter(VectorSpace.notCommonWord)
      .map(VectorSpace.lowerCaseWord)
      .sort((a, b) => a.localeCompare(b));
  }

  addPost({ id, post }) {
    const words = VectorSpace.filterWords(post);
    this.space[id] = words;
    console.log(this.space);
  }

}

export default VectorSpace;
