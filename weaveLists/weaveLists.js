module.exports.Node = function(string) {
  this.val = string;
  this.next = null;
};


//A->B->NULL
//1->2->3->NULL
//weave
//A->1->B->2->C->3->NULL


module.exports.weaveLists = function(nodeA, nodeB) {

  var workingNodeA = nodeA;
  var workingNodeB = nodeB;
  var referenceA, referenceB;

  while (workingNodeB !== null && workingNodeA !== null) {
    referenceA = workingNodeA.next;
    referenceB = workingNodeB.next;
    workingNodeA.next = workingNodeB;
    if (referenceA !== null) {
      workingNodeB.next = referenceA;
    }
    workingNodeA = referenceA;
    workingNodeB = referenceB;
  }

  return nodeA;
};

