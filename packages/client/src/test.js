import VectorSearch from './index.js';

const post = '[My] box name! is Andy,.; "Willis"$%^^*^%%*';
const post2 = 'Blather box 43546%$%$%$£%£ word to and from';

const vc = new VectorSearch();

vc.addPost({ id: 'first', post });
vc.addPost({ id: 'second', post: post2 });
