import commonWords from './common.js';

import { IPost, IEntry } from './types';

// VS adds key words to object identified by key
// VS accepts search string and finds the best matches

class VectorSpace {

  dictionary: string[] = [];

  space: IEntry[] = [];

  static lowerCaseWord(word: string): string {
    return word.toLowerCase();
  }

  static notCommonWord(word: string): boolean {
    return !commonWords.includes(word);
  }

  static removePunctuation(str: string): string {
    return str.replace(/[^\p{L}\s]/gu, '');
  }

  static sortByWord(a: string, b: string): number {
    return a.localeCompare(b);
  }

  static filterWords(str: string): string[] {
    return VectorSpace.removePunctuation(str)
      .split(/\b\s{1,}\b/g)
      .filter(VectorSpace.notCommonWord)
      .map(VectorSpace.lowerCaseWord)
      .sort(VectorSpace.sortByWord);
  }

  updateDictionary(words: string[]) {
    const merged = [ ...this.dictionary, ...words ];
    this.dictionary = merged.sort(VectorSpace.sortByWord);
  }

  addPost({ title, post }: IPost) {
    const words = VectorSpace.filterWords(post);
    this.space.push({ title, words });
    this.updateDictionary(words);
    console.log(this.space, this.dictionary);
  }

}

export default VectorSpace;
