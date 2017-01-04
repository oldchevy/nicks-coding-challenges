var Heap = require('../heapClass/heap.js');

var Graph = function(nodes, edges) {
  this.nodes = {};
  
  nodes.forEach(node => {
    this.nodes[node] = [];
  });

  //undirected graph
  edges.forEach(edge => {
    this.nodes[edge[0]].push({to: edge[1], weight: edge[2]});
    this.nodes[edge[1]].push({to: edge[0], weight: edge[2]});
  });
};

Graph.prototype.shortestPath = function(nodeA, nodeB) {
  
  //init visited hash
  var visited = {};
  visited[nodeA] = Infinity;

  //from the node we're visiting, see where we can go
  var nodesToTraverse = [];
  var working;
  var comparator = (a, b) => a.path - b.path;
  var heap = new Heap(comparator);
  heap.add({
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
        heap.add({
          node: node.to,
          path: working.path + node.weight
        });
      });
    }
  }

  return 'no path to specified node ' + nodeB;

};


module.exports = Graph;
