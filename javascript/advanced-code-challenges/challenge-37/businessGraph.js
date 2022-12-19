'use strict';

function businessTrip(graph, cities) {

  const departure = cities[0];
  const arrival = cities[1];
  const availableDestinations = graph.adjacencyList.get(departure);

  if (!availableDestinations) return null;
  for (let i = 0; i < availableDestinations.length; i++) {
    if (availableDestinations[i][0] === arrival) {
      return availableDestinations[i][1];
    }
  }
  return null;
}

module.exports = businessTrip;
