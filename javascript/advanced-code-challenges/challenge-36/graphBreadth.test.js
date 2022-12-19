'use strict';

const Graph = require('./graphBreadth');

describe('Testing the breadth first traversal method', () => {
  it('should return an empty array if no vertex is passed in', () => {
    let graph = new Graph;
    let result = graph.breadthFirst();
    expect(result).toEqual(null);
  });

  it('should return an array with one vertex for a graph with one vertex', () => {
    let graph = new Graph;
    graph.addVertex('test');
    let result = graph.breadthFirst('test');
    expect(result).toEqual(['test']);
  });

  it('should return the first set of edges with the original vertex', () => {
    let graph = new Graph;
    graph.addVertex('v1');
    graph.addVertex('v2');
    graph.addVertex('v3');
    graph.addEdge('v1', 'v2');
    graph.addEdge('v1', 'v3');
    let result = graph.breadthFirst('v1');
    console.log(result);
    expect(result).toEqual(expect.arrayContaining(['v1', 'v2', 'v3']));
  });

  it('should pass the example data set test case', () => {
    let graph = new Graph;
    graph.addVertex('Pandora');
    graph.addVertex('Arendelle');
    graph.addVertex('Metroville');
    graph.addVertex('Monstroplolis');
    graph.addVertex('Narnia');
    graph.addVertex('Naboo');
    graph.addEdge('Pandora', 'Arendelle');
    graph.addEdge('Arendelle', 'Metroville');
    graph.addEdge('Arendelle', 'Monstroplolis');
    graph.addEdge('Metroville', 'Monstroplolis');
    graph.addEdge('Metroville', 'Narnia');
    graph.addEdge('Metroville', 'Naboo');
    graph.addEdge('Monstroplolis', 'Naboo');
    graph.addEdge('Narnia', 'Naboo');
    let result = graph.breadthFirst('Pandora');
    console.log(result);
    expect(result).toEqual(expect.arrayContaining(['Pandora', 'Arendelle', 'Metroville', 'Monstroplolis', 'Narnia', 'Naboo']));
  });
});
