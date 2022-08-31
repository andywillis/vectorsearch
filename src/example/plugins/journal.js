// import { sanitiseText, filterText } from '../helpers/index.js';

// A plugin must
// !) accept the `sanitiseText` and `filterText` functions
// 2) return an array in the following shape:
// { id: string | number, title: string, words: string[] }
export default function journal({ sanitiseText, filterText }) {

  return function (data) {
    const entries = [];

    for (const entry of data.entries) {

      const { id, link, title, body } = entry;

      const words = [];

      for (const para of body) {
        if (para.html) {
          words.push(sanitiseText(para.html));
        }
      }

      if (words.length) {
        const filtered = filterText(words);
        entries.push({ id, title, link, words: filtered });
      }

    }

    return entries;
  };

}
