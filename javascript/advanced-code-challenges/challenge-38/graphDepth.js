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

  depthFirst(vertex) {
    if (!vertex) return null;
    const visited = [];

    const traversal = (vertex) => {
      let edges = this.adjacencyList.get(vertex);
      if (edges) {
        visited.push(vertex);
        for (let i = 0; i < edges.length; i++) {
          if (!visited.includes(edges[i][0])) {
            traversal(edges[i][0]);
          }
        }
      }
    };

    traversal(vertex);
    return visited;
  }
}

module.exports = Graph;
