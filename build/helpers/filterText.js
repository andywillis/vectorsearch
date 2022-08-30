"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../dictionary/index.js");
function filterText(text) {
    const filtered = text
        // Join paras
        .join('')
        // To lowercase
        .toLowerCase()
        // Split on the space
        .split(' ')
        // Sort alphabetically
        .sort((a, b) => a.localeCompare(b))
        // Remove long words
        .filter(word => word.length < 15)
        // Remove common words
        .filter(word => !index_js_1.common.includes(word))
        .filter(word => !index_js_1.stateVerbs.includes(word))
        .filter(word => !index_js_1.prepositions.includes(word))
        .filter(word => !index_js_1.possessivePronouns.includes(word))
        .filter(word => !index_js_1.personalPronouns.includes(word));
    return [...new Set(filtered)]
        .join(' ')
        .trim()
        .split(' ');
}
exports.default = filterText;
