'use strict';

const Graph = require('./graphDepth.js');

let graph = new Graph();

let letterArr = [
  'A', 'B', 'C', 'G', 'D', 'E', 'H', 'F'
];

letterArr.forEach((letter) => graph.addVertex(letter));

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'E');
graph.addEdge('D', 'H');
graph.addEdge('D', 'F');
graph.addEdge('F', 'H');

describe('Testing the depthFirst method for graph', () => {
  it('should return null when no vertex is entered', () => {
    let test = new Graph;
    let result = test.depthFirst();
    expect(result).toEqual(null);
  });

  it('should return an empty array when vertex is not in the graph', () => {
    let test = new Graph;
    let result = test.depthFirst('Z');
    expect(result).toEqual([]);
  });

  it('should return an array containing a single vertex on a graph with one vertex', () => {
    let test = new Graph;
    test.addVertex('Z');
    let result = test.depthFirst('Z');
    expect(result).toEqual(['Z']);
  });

  it('should return an array in the preorder traversal order for the example test case graph', () => {
    let result = graph.depthFirst('A');
    expect(result).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F']);
  });
});
