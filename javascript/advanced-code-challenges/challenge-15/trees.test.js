const { BinarySearchTree } = require('./trees.js');

describe('Binary Search Tree', () => {
  test('instantiate an empty tree', () => {
    const bst = new BinarySearchTree();
    expect(bst).toBeTruthy;
  });
});
