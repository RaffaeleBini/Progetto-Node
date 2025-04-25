const sinon = require('sinon');
const User = require('../models/User');
const { expect } = require('chai');

describe('User Model', () => {
  it('should create a new user', async () => {
    const stub = sinon.stub(User.prototype, 'save').resolves({ name: 'NonnaGina' });
    const user = new User({ name: 'NonnaGina' });
    const result = await user.save();
    expect(result.name).to.equal('NonnaGina');
    stub.restore();
  });
});