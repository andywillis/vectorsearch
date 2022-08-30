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

  static getInnerProduct(initial, arr) {
    let innerProduct = 0;
    for (let i = 0; i < initial.length; i++) {
      innerProduct += initial[i] * arr[i];
    }
    return innerProduct;
  }

  static getResult(initial, vector) {
    const innerSqrtProduct = {
      initial: Math.sqrt(VectorSpace.getInnerProduct(initial, initial)),
      vector: Math.sqrt(VectorSpace.getInnerProduct(initial, vector))
    };
    return innerSqrtProduct.vector / innerSqrtProduct.initial;
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
    console.log(entries);
  }

  search(str) {
    const query = str.split(' ');
    this.buildVector(query);
  }

}

export default VectorSpace;
