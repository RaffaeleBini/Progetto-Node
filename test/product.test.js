const sinon = require('sinon');
const Product = require('../models/Product');
const { expect } = require('chai');

describe('Product Model', () => {
  it('should create a new product', async () => {
    const stub = sinon.stub(Product.prototype, 'save').resolves({ name: 'Tempeh' });
    const product = new Product({ name: 'Tempeh' });
    const result = await product.save();
    expect(result.name).to.equal('Tempeh');
    stub.restore();
  });
});
