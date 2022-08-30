import data from '../data/data.json' assert { type: 'json' };
import journal from '../src/plugins/journal.js';

import VectorSearch from '../src/index.js';

const vs = new VectorSearch()
  .addPlugin(journal)
  .addData(data)
  .processData();

const query = 'sea andy earls broadstairs sandwich drains';
const results = vs.search(query);

console.log(results);
