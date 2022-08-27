import data from '../data/data.js';
import journal from './plugins/journal.js';

// import VectorSearch from './vectorSpace.js';

// const post = '[My] box name! is Andy,.; "Willis"$%^^*^%%*';
// const post2 = 'Blather 43546%$%$%$£%£ word Andy to and from';

// const vc = new VectorSearch();

// vc.addData(data);
// vc.addPost({ title: 'first', post });
// vc.addPost({ title: 'second', post: post2 });

// vc.search('boom');
// vc.search('blather');

console.log(journal(data));
