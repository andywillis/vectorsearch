export default function vectorDatabase() {

  const database = [];
  const definition = [];
  let databaseHash = 0;

  return {

    nameDatabase: function (name) {
      this.name = name;
    },

    loadDatabase: function (arr) {
      database.push.apply(database, arr);
      databaseHash = this.getHashSecondNorm(database.length);
    },

    getHash: function (arr) {
      let innerProduct = 0;
      const hash = [];
      for (let i = 0, l = database.length; i < l; i++) {
        if (arr.indexOf(database[i]) > -1) {
          hash.push(1);
          innerProduct++;
        } else {
          hash.push(0);
        }
      }
      return {
        hash: hash,
        innerProduct: innerProduct,
        secondNorm: this.getHashSecondNorm(innerProduct)
      };
    },

    getResult: function (vector) {
      return vector.innerProduct / (databaseHash * vector.secondNorm);
    },

    getHashSecondNorm: function (innerProduct) {
      return Math.sqrt(innerProduct);
    },

    showDatabase: function () {
      return database;
    },

    addDefinition: function (def) {
      definition.push.apply(def);
    },

    buildVectorObject: function (obj) {
      const vector = definition.reduce(function (p, c) {
        p[c] = obj[c];
      }, {});
      vector.hash = this.getHash(obj.tags); 
    },

    addVector: function (obj) {
      const vector = this.buildVectorObject(obj);
      database.push(vector);
    }

  };

}
