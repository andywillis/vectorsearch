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
    console.log(this.space);
    return this;
  }

}

export default VectorSpace;
