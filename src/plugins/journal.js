import { sanitiseText, filterText } from '../helpers/index.js';

export default function journal(data) {

  const entries = [];

  for (const entry of data.entries) {

    const { id, title, body } = entry;

    const text = [];

    for (const para of body) {
      if (para.html) {
        text.push(sanitiseText(para.html));
      }
    }

    if (text.length) {
      const filtered = filterText(text);
      entries.push({ id, title, text: filtered });
    }

  }

  return entries;

}
