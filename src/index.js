export default function vectorDatabase() {

  const database = [];

  return {

    nameDatabase: function (name) {
      this.name = name;
    },

    loadDatabase: function (arr) {
      database.push.apply(database, arr);
    },

    showDatabase: function () {
      return database;
    },

    getHash: function () {

    },

    defineVector: function (def) {
      console.log(def);
    },

    addVector: function (vector) {
      database.push(vector);
    }

  };

}

/*
var base = ['cat', 'dog', 'rabbit', 'tree', 'bob'];

var input = ['dog', 'bob', 'bone'];
var input2 = ['cat', 'dog', 'rabbit', 'tree', 'bob'];
var input3 = ['carrot', 'frog', 'cat', 'moose', 'rabbit', 'tree', 'bob'];

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
var hash3 = getHashObject(base, input3);

console.log(hash.cosine);
console.log(hash2.cosine);
console.log(hash3.cosine);
*/
