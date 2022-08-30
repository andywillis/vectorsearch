import { IVectorSpace } from './types/index.js';

class VectorSpace implements IVectorSpace {

  plugin
  data
  space

  // Add plugin to be used to transform the data
  addPlugin(fn) {
    this.plugin = fn;
    return this;
  }

  // Add the data to be transformed
  addData(data) {
    this.data = data;
    return this;
  }

  // Process the data using the assigned plugin
  processData() {
    this.space = this.plugin(this.data);
    return this;
  }

  // Shows the complete vector space
  showSpace() {
    return this.space;
  }

  // Finds the inner product between the two arrays
  // and then finds the square root of that value
  static getSqrtInnerProduct(vectorOne, vectorTwo) {
    let innerProduct = 0;
    for (let i = 0; i < vectorOne.length; i++) {
      innerProduct += vectorOne[i] * vectorTwo[i];
    }
    return Math.sqrt(innerProduct);
  }

  // Finds the square root inner product for both the entry
  // vector and the query vector, and return query / initial
  // to get a floating point number
  static getQueryRank({ initialVector, queryVector }) {
    const results = {
      initialVector: VectorSpace.getSqrtInnerProduct(initialVector, initialVector),
      queryVector: VectorSpace.getSqrtInnerProduct(initialVector, queryVector)
    };
    return results.queryVector / results.initialVector;
  }

  copySpace() {
    return [ ...this.space ];
  }

  filterByQuery(query: string[]) {

    // Make a copy of the vector space
    const entries = this.copySpace();

    // Iterate over the space entries
    for (const entry of entries) {

      // Get the sanitised words
      const { words } = entry;

      // Create a new array on the entry
      entry.queryVector = [];

      // Create a vector for the current query using
      // the words array as a basis
      for (let i = 0; i < words.length; i++) {
        if (query.includes(words[i])) {
          entry.queryVector[i] = 1;
        } else {
          entry.queryVector[i] = 0;
        }
      }

      // Pass in the initial vector, and the vector
      // for the query
      entry.queryRank = VectorSpace.getQueryRank({
        initialVector: new Array(entry.words.length).fill(1),
        queryVector: entry.queryVector
      });

    }

    // Remove any ranks that are zero,
    // and then sort the remaining entries in
    // descending order
    return entries
      .filter(entry => entry.queryRank)
      .sort((a, b) => b.queryRank - a.queryRank);

  }

  // Create an array from the search string
  // and return a set of new entries that are filtered
  // and sorted according to their vector rank
  search(str) {
    const query = str.split(' ');
    const entries = this.filterByQuery(query);
    return entries;
  }

}

export default VectorSpace;
