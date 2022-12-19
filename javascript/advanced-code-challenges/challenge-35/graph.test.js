'use strict';

const Graph = require('./graph');

describe('Testing the graph class and methods', () => {
  it('should intitialize a new graph', () => {
    let graph = new Graph;
    expect(graph).toBeInstanceOf(Graph);
  });

  it('should return the size of the graph', () => {
    let graph = new Graph;
    let size = graph.size();
    expect(size).toEqual(0);
  });

  it('should add a new vertex', () => {
    let graph = new Graph;
    let vertex = 'test';
    graph.addVertex(vertex);
    let size = graph.size();

    expect(size).toEqual(1);
    expect(graph.adjacencyList.has(vertex)).toBeTruthy();
  });

  it('should return an array of all nodes in the graph', () => {
    let graph = new Graph;
    graph.addVertex('item1');
    graph.addVertex('item2');
    graph.addVertex('item3');
    let vertexs = graph.getVertexes();

    expect(vertexs.length).toEqual(3);
    expect(vertexs).toContain('item1', 'item2', 'item3');
  });

  it('should return an error when adding an edge between two nodes not in the graph', () => {
    let graph = new Graph;
    let result = graph.addEdge('v1', 'v2');

    expect(result).toEqual('NOT IN GRAPH');
  });

  it('should add an unweighted edge between two nodes in the graph', () => {
    let graph = new Graph;
    graph.addVertex('v1');
    graph.addVertex('v2');
    graph.addEdge('v1', 'v2');
    let v1Edges = graph.adjacencyList.get('v1');
    let v2Edges = graph.adjacencyList.get('v2');

    expect(v1Edges).toEqual([['v2', null]]);
    expect(v2Edges).toEqual([['v1', null]]);
  });

  it('should add a weighted edge between two nodes in the graph', () => {
    let graph = new Graph;
    graph.addVertex('v1');
    graph.addVertex('v2');
    graph.addEdge('v1', 'v2', 50);
    let v1Edges = graph.adjacencyList.get('v1');
    let v2Edges = graph.adjacencyList.get('v2');

    expect(v1Edges).toEqual([['v2', 50]]);
    expect(v2Edges).toEqual([['v1', 50]]);
  });

  it('should return an error if the vertex is not in the graph', () => {
    let graph = new Graph;
    let result = graph.neighbors();

    expect(result).toEqual('NOT IN GRAPH');
  });

  it('should return an array of edges with weights for a vertex', () => {
    let graph = new Graph;
    graph.addVertex('v1');
    graph.addVertex('v2');
    graph.addVertex('v3');
    graph.addEdge('v1', 'v2', 50);
    graph.addEdge('v1', 'v3', 25);
    let result = graph.neighbors('v1');

    expect(result).toEqual(expect.arrayContaining([['v2', 50], ['v3', 25]]));
  });

});
