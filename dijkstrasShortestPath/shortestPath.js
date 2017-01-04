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
  
  //init visited hash
  var visited = {};

  //from the node we're visiting, see where we can go
  var nodesToTraverse = [];
  var working;
  var comparator = (a, b) => {
    if (a && b) {
      return a.path - b.path;
    } else {
      return Infinity;
    }
  };
  var heap = new Heap(comparator);
  heap.insert({
    node: nodeA,
    path: 0
  });

  //min heap stores which node to visit next
  while (heap.size() > 0) {
    //take off the top of the heap
    working = heap.remove();
    nodesToTraverse = this.nodes[working.node];
    if (working.node === nodeB) {
      return working.path;
    }

    //skip over duplicates in the heap
    if (!visited[working.node]) {
      visited[working.node] = true;

      nodesToTraverse.forEach(node => {
        heap.insert({
          node: node.to,
          path: working.path + node.weight
        });
      });
    }
  }
  
  //we weren't able to find a solution
  return undefined;

};


module.exports = Graph;
