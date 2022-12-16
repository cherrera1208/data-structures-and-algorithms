const LinkedList = require('./kthFromLast');

describe('Linked List Kth', () => {
  test('kth element from the end', () => {
    const list = new LinkedList();
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => list.append(i));
    const kthFromRear = list.kthFromRear(4);
    expect(kthFromRear).toBe(7);
  });
});
