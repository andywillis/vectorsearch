import {
  common,
  personalPronouns,
  prepositions,
  possessivePronouns,
  stateVerbs,
} from '../dictionary/index.js';

export default function filterText(text) {

  const filtered = text

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

  return [ ...new Set(filtered) ]
    .join(' ')
    .trim()
    .split(' ');

}
