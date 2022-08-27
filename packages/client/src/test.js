import data from '../data/data.js';
import journal from './plugins/journal.js';

import VectorSearch from './vectorSpace.js';

const vc = new VectorSearch();

vc.addPlugin(journal)
  .addData(data)
  .processData()
  .showSpace();
