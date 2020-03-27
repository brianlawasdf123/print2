const { expect } = require('chai');
const print = require('./index');

describe('print', function() {
    it('prints', function() {
        expect(print()).to.eql('hello world');
    });
});
