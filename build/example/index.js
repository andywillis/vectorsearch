"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("../data/data.json"));
const journal_js_1 = __importDefault(require("../src/plugins/journal.js"));
const index_js_1 = __importDefault(require("../src/index.js"));
const vs = new index_js_1.default()
    .addPlugin(journal_js_1.default)
    .addData(data_json_1.default)
    .processData();
const query = 'sea andy earls broadstairs sandwich drains';
const results = vs.search(query);
console.log(results);
