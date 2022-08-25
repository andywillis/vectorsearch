import VectorSearch from './vectorSpace.js';

const post = '[My] box name! is Andy,.; "Willis"$%^^*^%%*';
const post2 = 'Blather box 43546%$%$%$£%£ word to and from';

const vc = new VectorSearch();

vc.addPost({ title: 'first', post });
vc.addPost({ title: 'second', post: post2 });

vc.search('boom');
vc.search('blather');
