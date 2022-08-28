import data from '../data/data.json' assert { type: 'json' };
import journal from '../src/plugins/journal.js';

import VectorSearch from '../src/index.js';

new VectorSearch()
  .addPlugin(journal)
  .addData(data)
  .processData()
  .showSpace();
