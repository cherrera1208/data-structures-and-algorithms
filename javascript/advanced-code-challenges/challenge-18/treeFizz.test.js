'use strict';

const { Node, KaryTree, fizzBuzzTree } = require('./tree-fizz-buzz.js');

const testTree = new KaryTree(3);

let n1 = new Node(1);
let n2 = new Node(4);
let n3 = new Node(34);
let n4 = new Node(8);
let n5 = new Node(90);
let n6 = new Node(88);
let n7 = new Node(2);
let n8 = new Node(14);
let n9 = new Node(27);
let n10 = new Node(18);
let n11 = new Node(78);
let n12 = new Node(13);

testTree.root = n1;

n1.children = [n2, n3];
n2.children = [n4, n5, n6];
n3.children = [n8, n9];
n5.children = [n7];
n8.children = [n10, n11, n12];

describe('Testing fizzBuzzTree function', () => {
  it('should return an exception on an empty tree', () => {
    let emptyTree = new KaryTree(0);
    let result = fizzBuzzTree(emptyTree);
    expect(result).toEqual('EMPTY TREE');
  });

  it('should return fizz buzz, fizzbuzz, or number tree as expected', () => {
    let fbTree = fizzBuzzTree(testTree);
    let node2 = fbTree.root.children[0];
    let node3 = fbTree.root.children[1];
    let node4 = node2.children[0];
    let node5 = node2.children[1];
    let node6 = node2.children[2];
    let node7 = node5.children[0];
    let node8 = node3.children[0];
    let node9 = node3.children[1];
    let node10 = node8.children[0];
    let node11 = node8.children[1];
    let node12 = node8.children[2];

    expect(fbTree.root.value).toEqual('1');
    expect(node2.value).toEqual('4');
    expect(node3.value).toEqual('34');
    expect(node4.value).toEqual('8');
    expect(node5.value).toEqual('FizzBuzz');
    expect(node6.value).toEqual('88');
    expect(node7.value).toEqual('2');
    expect(node8.value).toEqual('14');
    expect(node9.value).toEqual('Fizz');
    expect(node10.value).toEqual('Fizz');
    expect(node11.value).toEqual('Fizz');
    expect(node12.value).toEqual('13');
  });
});
