import data from '../data/data.json' assert { type: 'json' };
import journal from './plugins/journal.js';

import VectorSearch from './vectorSpace.js';

new VectorSearch()
  .addPlugin(journal)
  .addData(data)
  .processData()
  .showSpace();
