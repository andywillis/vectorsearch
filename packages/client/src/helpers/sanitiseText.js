export default function sanitiseText(text) {
  return text

    // Remove HTML markup
    .replaceAll(/<[^>]*>/g, '')

    // Remove line endings
    .replaceAll(/\n/g, '')

    // Remove punctuation except full-stops,
    // and hyphens
    .replaceAll(/[^\p{L}\s.\-0-9/]/gu, '')

    // Replace full-stops, and backslashes with a space
    .replaceAll(/[./]/g, ' ')

    // String to lower case
    .toLowerCase();
}
