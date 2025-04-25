const sinon = require('sinon');
const Order = require('../models/Order');
const { expect } = require('chai');

describe('Order Model', () => {
  it('should create a new order', async () => {
    const stub = sinon.stub(Order.prototype, 'save').resolves({ name: 'Order001' });
    const order = new Order({ name: 'Order001' });
    const result = await order.save();
    expect(result.name).to.equal('Order001');
    stub.restore();
  });
});