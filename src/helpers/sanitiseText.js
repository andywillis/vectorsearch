// Remove HTML markup
export function removeHtmlMarkup(text) {
  return text.replaceAll(/<[^>]*>/g, '');
}

// Remove line-endings
export function removeLineendings(text) {
  return text.replaceAll(/\n/g, '');
}

// Remove punctuation except period, and hyphens
export function removePunctuation(text) {
  return text.replaceAll(/[^\p{L}\s.\-0-9/]/gu, '');
}

// Replace periods/backslash with space
export function replacePeriodBackslash(text) {
  return text.replaceAll(/[./]/g, ' ');
}

const fns = [
  removeHtmlMarkup,
  removeLineendings,
  removePunctuation,
  replacePeriodBackslash
];

export default function sanitiseText(text) {
  return fns.reduce((acc, fn) => {
    return fn(acc);
  }, text);
}
