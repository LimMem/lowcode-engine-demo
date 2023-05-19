import Factory from "./factory";

class Assets {
  factory: Factory;
  constructor() {
    this.factory = new Factory();
  }
}

const assetHelper = new Assets();
export default assetHelper;
