var base = ['cat', 'dog', 'rabbit', 'tree', 'bob'];
var input = ['dog', 'bob', 'bone'];
var input2 = ['cat', 'dog', 'rabbit', 'tree', 'bob'];

function getHashObject(base, input) {
  var hash = [];
  var innerProduct = 0;
  for (var i = 0, l = base.length; i < l; i++) {
    if (input.indexOf(base[i]) > -1) {
      hash.push(1);
      innerProduct++;
    } else {
      hash.push(0);
    }
  }
  var twoNorm = Math.sqrt(innerProduct);
  var baseTwoNorm = Math.sqrt(base.length);
  return {
    hash: hash,
    innerProduct: innerProduct,
    twoNorm: twoNorm,
    cosine: innerProduct / (baseTwoNorm * twoNorm)
  };
}

var hash = getHashObject(base, input);
var hash2 = getHashObject(base, input2);

console.log(hash.cosine);
console.log(hash2.cosine);