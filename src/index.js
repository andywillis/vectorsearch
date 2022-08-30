class VectorSpace {

  addPlugin(fn) {
    this.plugin = fn;
    return this;
  }

  addData(data) {
    this.data = data;
    return this;
  }

  processData() {
    this.space = this.plugin(this.data);
    return this;
  }

  showSpace() {
    return this.space;
  }

  static getSqrtInnerProduct(initial, arr) {
    let innerProduct = 0;
    for (let i = 0; i < initial.length; i++) {
      innerProduct += initial[i] * arr[i];
    }
    return Math.sqrt(innerProduct);
  }

  static getResult(initial, vector) {
    const results = {
      initial: VectorSpace.getSqrtInnerProduct(initial, initial),
      vector: VectorSpace.getSqrtInnerProduct(initial, vector)
    };
    return results.vector / results.initial;
  }

  buildVector(query) {
    const entries = [ ...this.space ];
    for (const entry of entries) {
      const { text } = entry;
      entry.vector = [];
      for (let i = 0; i < text.length; i++) {
        if (query.includes(text[i])) {
          entry.vector[i] = 1;
        } else {
          entry.vector[i] = 0;
        }
      }
      entry.result = VectorSpace.getResult(
        new Array(entry.text.length).fill(1),
        entry.vector
      );
    }
    return entries
      .filter(entry => entry.result)
      .sort((a, b) => b.result - a.result);
  }

  search(str) {
    const query = str.split(' ');
    const entries = this.buildVector(query);
    console.log(entries);
  }

}

export default VectorSpace;
