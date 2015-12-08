import vectorDatabase from '../src/index';

const db = vectorDatabase();

db.nameDatabase('Andy');
db.loadDatabase(['cat', 'dog', 'rabbit', 'tree', 'bob']);

console.log(db.showDatabase());
