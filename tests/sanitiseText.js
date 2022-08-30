import test from 'tape';

import sanitiseText, {
  removeHtmlMarkup,
  removeLineendings,
  removePunctuation,
  replacePeriodBackslash
} from '../src/helpers/sanitiseText.js';

test('sanitiseText is a function', t => {
  t.plan(1);
  t.equal(typeof sanitiseText, 'function');
  t.end();
});

test('it removes HTML markup', t => {
  t.plan(1);
  const txt = '<h1>Hallo</h1>';
  t.equal(removeHtmlMarkup(txt), 'Hallo');
  t.end();
});

test('it removes line endings', t => {
  t.plan(1);
  const txt = 'test\ntest2\n';
  t.equal(removeLineendings(txt), 'testtest2');
  t.end();
});

test('it removes punctuation', t => {
  t.plan(1);
  const txt = 'Aabc324;;;99((*)(*&)*';
  t.equal(removePunctuation(txt), 'Aabc32499');
  t.end();
});

test('it replaces periods/backslashes with a space', t => {
  t.plan(1);
  const txt = 'This is a test. But! / What is this?';
  t.equal(replacePeriodBackslash(txt), 'This is a test  But!   What is this?');
  t.end();
});
