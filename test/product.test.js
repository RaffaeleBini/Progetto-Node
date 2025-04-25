const sinon = require('sinon');
const Product = require('../models/Product');
const { expect } = require('chai');

describe('Product Model', () => {
  it('should create a new product', async () => {
    const stub = sinon.stub(Product.prototype, 'save').resolves({ name: 'Lasagna' });
    const product = new Product({ name: 'Lasagna' });
    const result = await product.save();
    expect(result.name).to.equal('Lasagna');
    stub.restore();
  });
});
