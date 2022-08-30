"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../helpers/index.js");
// A plugin must return an array in the following shape:
// { id: string | number, title: string, words: string[] }
function journal(data) {
    const entries = [];
    for (const entry of data.entries) {
        const { id, link, title, body } = entry;
        const words = [];
        for (const para of body) {
            if (para.html) {
                words.push((0, index_js_1.sanitiseText)(para.html));
            }
        }
        if (words.length) {
            const filtered = (0, index_js_1.filterText)(words);
            entries.push({ id, title, link, words: filtered });
        }
    }
    return entries;
}
exports.default = journal;
