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
  getVertexs() {
    return Array.from(this.adjacencyList.keys());
  }
  addEdge(vertex1, vertex2, weight = null) {
    if (!this.adjacencyList.get(vertex1) || !this.adjacencyList.get(vertex2)) return 'Not in a graph';
    const v1Edges = this.adjacencyList.get(vertex1);
    const v2Edges = this.adjacencyList.get(vertex2);

    this.adjacencyList.set(v1Edges.push([vertex2, weight]));
    this.adjacencyList.set(v2Edges.push([vertex1, weight]));
  }
  neighbors(vertex) {
    if (!this.adjacencyList.get(vertex)) return 'Not in a graph';

    return this.adjacencyList.get(vertex);
  }
  breadthFirst(vertex) {

    if (!vertex) return null;
    const queue = [vertex];
    const visited = [];
    let current;

    while (queue.length) {
      console.log(queue.length);
      current = queue.pop();
      let edges = this.adjacencyList.get(current);
      for (let i = 0; i < edges.length; i++) {
        if (!visited.includes(edges[i][0])) queue.unshift(edges[i][0]);
      }
      if (!visited.includes(current)) visited.push(current);
    }
    return visited;
  }
}

module.exports = Graph;
