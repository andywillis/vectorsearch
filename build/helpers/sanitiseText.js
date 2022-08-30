"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacePeriodBackslash = exports.removePunctuation = exports.removeLineendings = exports.removeHtmlMarkup = void 0;
// Remove HTML markup
function removeHtmlMarkup(text) {
    return text.replaceAll(/<[^>]*>/g, '');
}
exports.removeHtmlMarkup = removeHtmlMarkup;
// Remove line-endings
function removeLineendings(text) {
    return text.replaceAll(/\n/g, '');
}
exports.removeLineendings = removeLineendings;
// Remove punctuation except period, and hyphens
function removePunctuation(text) {
    return text.replaceAll(/[^\p{L}\s.\-0-9/]/gu, '');
}
exports.removePunctuation = removePunctuation;
// Replace periods/backslash with space
function replacePeriodBackslash(text) {
    return text.replaceAll(/[./]/g, ' ');
}
exports.replacePeriodBackslash = replacePeriodBackslash;
const fns = [
    removeHtmlMarkup,
    removeLineendings,
    removePunctuation,
    replacePeriodBackslash
];
function sanitiseText(text) {
    return fns.reduce((acc, fn) => {
        return fn(acc);
    }, text);
}
exports.default = sanitiseText;
