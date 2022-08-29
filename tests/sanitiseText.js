import test from 'tape';
import sanitiseText from '../src/helpers/sanitiseText.js';

test('sanitiseText', t => {

  t.plan(1);

  t.equal(typeof sanitiseText, 'function');

});
