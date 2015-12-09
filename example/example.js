import vectorDatabase from '../src/index';

const db = vectorDatabase();

db.nameDatabase('Andy');
db.addDefinition(['id', 'tags']);
db.loadDatabase(['cat', 'dog', 'rabbit', 'tree', 'bob']);

const input = {
  id: 3,
  title: 'Two',
  tags: ['dog', 'bob', 'bone']
};

const input2 = {
  id: 2,
  title: 'Two',
  tags: ['cat', 'dog', 'rabbit', 'tree', 'bob']
};

const input3 = {
  id: 1,
  title: 'One',
  tags: ['carrot', 'frog', 'cat', 'moose', 'rabbit', 'tree', 'bob']
};

console.log(db.showDatabase());
