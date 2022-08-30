import test from 'tape';
import VectorSpace from '../src/index';

const vs = new VectorSpace();

test('VectorSpace', t => {

  t.test('is an object', t => {
    t.plan(1);
    t.equal(typeof vs, 'object');
    t.end();
  });

});
