'use strict';

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  size() {
    return this.adjacencyList.size;
  }
  addVertex(value) {
    this.adjacencyList.set(value, []);
    return this.adjacencyList.get(value);
  }
  getVertexes() {
    return Array.from(this.adjacencyList.keys());
  }
  addEdge(vertex1, vertex2, weight = null) {
    if (!this.adjacencyList.get(vertex1) || !this.adjacencyList.get(vertex2)) return 'NOT IN GRAPH';
    const v1Edges = this.adjacencyList.get(vertex1);
    const v2Edges = this.adjacencyList.get(vertex2);

    this.adjacencyList.set(v1Edges.push([vertex2, weight]));
    this.adjacencyList.set(v2Edges.push([vertex1, weight]));
  }
  neighbors(vertex) {
    if (!this.adjacencyList.get(vertex)) return 'NOT IN GRAPH';

    return this.adjacencyList.get(vertex);
  }
}

module.exports = Graph;
