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
  
  //
  var visited = {
    nodeA: Infinity
  };

  //from the node we're visiting, see where we can go
  var nodesToTraverse = this.nodes[nodeA];
  var heap = new Heap();
  var working;
  
  nodesToTraverse.forEach(node => {
    visited[node.to] = node.weight;
    //add takes a key and a val
    heap.add({ 
      node: node.to, 
      path: visited[node.to]
    });

  });

  //min heap stores which node to visit next
  while (heap.size() > 0) {
    //take off the top of the heap
    working = heap.remove();
    nodesToTraverse = this.nodes[working.node];

    nodesToTraverse.forEach(node => {
      //for each node we can go to, see if it's been visited
      //if it has
      if (visited[node.to]) {

        //check if the current route is shorter than the route we've seen
        visited[node.to] = Math.min(visited[node.to], working.path + node.weight);

        //we need something to update the path in the heap if it was smaller
        if (Math.min(visited[node.to], working.path + node.weight) === working.path + node.weight) {
          heap.update(node.to, visited[node.to]);
        }
      
      //if it hasn't  
      } else {
        //put it in the visited hash
        visited[node.to] = working.path + node.weight;

        //put it in the heap
        heap.add({
          node: node.to,
          path: visited[node.to]
        });
      }
    });
  }

  return visited[nodeB] ? visited[nodeB] : null;

};


module.exports = Graph;
