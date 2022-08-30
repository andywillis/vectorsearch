import data from '../data/data.json' assert { type: 'json' };
import journal from '../src/plugins/journal.js';

import VectorSearch from '../src/index.js';

// eslint-disable-next-line no-unused-vars
const vs = new VectorSearch()
  .addPlugin(journal)
  .addData(data)
  .processData()
  .search('sea andy earls broadstairs sandwich drains');

// console.log(vs.showSpace());
