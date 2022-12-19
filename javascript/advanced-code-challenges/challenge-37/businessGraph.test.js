'use strict';

const Graph = require('../code-challenge35/graphs.js');
const businessTrip = require('./businessGraph.js');

let graph = new Graph;
graph.addVertex('Pandora');
graph.addVertex('Arendelle');
graph.addVertex('Metroville');
graph.addVertex('Monstroplolis');
graph.addVertex('Narnia');
graph.addVertex('Naboo');
graph.addEdge('Pandora', 'Arendelle', 150);
graph.addEdge('Pandora', 'Metroville', 82);
graph.addEdge('Arendelle', 'Metroville', 99);
graph.addEdge('Arendelle', 'Monstroplolis', 42);
graph.addEdge('Metroville', 'Monstroplolis', 105);
graph.addEdge('Metroville', 'Narnia', 37);
graph.addEdge('Metroville', 'Naboo', 26);
graph.addEdge('Monstroplolis', 'Naboo', 73);
graph.addEdge('Narnia', 'Naboo', 250);

describe('Testing the businessTrip function', () => {
  it('should return null if departure city is not in the graph', () => {
    let result = businessTrip(graph, ['Not-in-graph', 'Pandora']);
    expect(result).toEqual(null);
  });
  it('should return null if arrival city is not in graph ', () => {
    let result = businessTrip(graph, ['Pandora', 'Not-in-graph']);
    expect(result).toEqual(null);
  });
  it('should return null if departure city does not have a direct flight to arrival city ', () => {
    let result = businessTrip(graph, ['Pandora', 'Narnia']);
    expect(result).toEqual(null);
  });
  it('should return cost of flight if arrival city is first edge ', () => {
    let result1 = businessTrip(graph, ['Pandora', 'Arendelle']);

    expect(result1).toEqual(150);
  });
  it('should return cost of flight if arrival city is second or greater edge', () => {
    let result1 = businessTrip(graph, ['Narnia', 'Naboo']);
    let result2 = businessTrip(graph, ['Metroville', 'Naboo']);

    expect(result1).toEqual(250);
    expect(result2).toEqual(26);
  });
});
