var Graph = function(nodes, edges) {
  this.nodes = {};
  nodes.forEach(node => {
    this.nodes[node] = [];
  });


  edges.forEach(edge => {
    this.nodes[edge[0]].push({to: edge[1], weight: edge[2]});
    this.nodes[edge[1]].push({to: edge[0], weight: edge[2]});
  });
};

Graph.prototype.shortestPath = function(nodeA, nodeB) {
  
  var nodesToTraverse = this.nodes[nodeA];

  //from the node we're visiting, see where we can go

  //for each node we can go to, see if it's been visited
  //if it has
    //check if the current route is shorter than the route we've seen
    //update

  //if it hasn't
    //put it in the visited hash

  //if it's the node we're looking for, store distance in hash and return  

  //min heap stores which node to visit next
};


module.exports = Graph;
