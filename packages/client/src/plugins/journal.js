import sanitiseText from '../helpers/sanitiseText.js';

import {
  common,
  personalPronouns,
  prepositions,
  possessivePronouns,
  stateVerbs,
} from '../words/index.js';

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

      const fixed = text

        // Join paras
        .join('')

        // Split on the space
        .split(' ')

        // Sort alphabetically
        .sort((a, b) => a.localeCompare(b))

        // Remove long words
        .filter(word => word.length < 15)

        // Remove common words
        .filter(word => !common.includes(word))
        .filter(word => !stateVerbs.includes(word))
        .filter(word => !prepositions.includes(word))
        .filter(word => !possessivePronouns.includes(word))
        .filter(word => !personalPronouns.includes(word));

      entries.push({
        id,
        title,
        text: [ ...new Set(fixed) ].join(' ').trim().split(' ')
      });

    }

  }

  return entries;

}
