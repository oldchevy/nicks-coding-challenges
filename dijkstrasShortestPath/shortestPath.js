//Make use of a heap, maybe you already have one implemented?!
var Heap = require('../heapClass/heap.js');

//I'm giving you this basic graph data structure to hold relations
var Graph = function(nodes, edges) {
  this.nodes = {};
  
  //The array being declared will hold the edge relations
  nodes.forEach(node => {
    this.nodes[node] = [];
  });

  //undirected graph is bi-directional, we represent this by adding to the edge list for both nodes
  edges.forEach(edge => {
    this.nodes[edge[0]].push({to: edge[1], weight: edge[2]});
    this.nodes[edge[1]].push({to: edge[0], weight: edge[2]});
  });
};

Graph.prototype.shortestPath = function(nodeA, nodeB) {
  //implement me!
};


module.exports = Graph;
