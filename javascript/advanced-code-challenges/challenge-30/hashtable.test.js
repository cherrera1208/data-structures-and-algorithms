const { Hashtable } = require('./hashtable.js');

describe('Hashtable', () => {

  test('should create a hashtable', () => {
    const hash = new Hashtable();
    expect(hash).toBeTruthy();
  });
});
