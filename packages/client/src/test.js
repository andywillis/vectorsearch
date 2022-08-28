import json from '../data/data.json' assert { type: 'json' };
import journal from './plugins/journal.js';

import VectorSearch from './vectorSpace.js';

const vc = new VectorSearch();

vc.addPlugin(journal)
  .addData(JSON.parse(json))
  .processData()
  .showSpace();
