import test from 'tape';

import sanitiseText, {
  removeHtmlMarkup,
  removeLineendings,
  removePunctuation,
  replacePeriodBackslash
} from '../src/helpers/sanitiseText.js';

test('is a function', t => {
  t.plan(1);
  t.equal(typeof sanitiseText, 'function');
});

test('removes HTML markup', t => {
  t.plan(1);
  const txt = '<h1>Hallo</h1>';
  t.equal(removeHtmlMarkup(txt), 'Hallo');
});

test('removes line endings', t => {
  t.plan(1);
  const txt = 'test\ntest2\n';
  t.equal(removeLineendings(txt), 'testtest2');
});

test('removes punctuation', t => {
  t.plan(1);
  const txt = 'Aabc324;;;99((*)(*&)*';
  t.equal(removePunctuation(txt), 'Aabc32499');
});

test('replace period/backslash with space', t => {
  t.plan(1);
  const txt = 'This is a test. But! / What is this?';
  console.log(replacePeriodBackslash(txt));
  t.equal(replacePeriodBackslash(txt), 'This is a test  But!   What is this?');
});
