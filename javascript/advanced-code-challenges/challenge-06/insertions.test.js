const LinkedList = require('./insertions');
const ll = new LinkedList();

test('appends node', () => {
  ll.append(1);
  expect(ll).toEqual('0,1,2,1');
});
