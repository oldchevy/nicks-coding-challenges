//Test suite for weaveLists
const expect = require('chai').expect;
const { Node, weaveLists } = require('./weaveLists');

describe('Weave Lists', function() {

  var answers = [
    {
      action: () => {},
      array: ['A', '1', 'B', '2', 'C', '3', 'D', '4']
    },
    {
      action: (node1, node2) => {
        node2.next.next.next = null;
      },
      array: ['A', '1', 'B', '2', 'C', '3', 'D']
    },
    {
      action: (node1, node2) => {
        node1.next.next = null;
      },
      array: ['A', '1', 'B', '2', '3', '4']
    },
    {
      action: (node1, node2) => {
        node2.next = null;
      },
      array: ['A', '1', 'B', 'C', 'D']
    }
  ];

  const printList = function(list) {
    const arr = [];
    while (list !== null) {
      arr.push(list.val);
      list = list.next;
    }
    return arr;
  };

  answers.forEach(answer => {
    const listA = new Node('A');
    listA.next = new Node('B');
    listA.next.next = new Node('C');
    listA.next.next.next = new Node('D');

    const listB = new Node('1');
    listB.next = new Node('2');
    listB.next.next = new Node('3');
    listB.next.next.next = new Node('4');

    answer.action(listA, listB);

    let result;
    
    it(`should weave lists:  ${printList(listA)}, ${printList(listB)}`, () => {
      result = printList(weaveLists(listA, listB));
      expect(result).to.deep.equal(answer.array);
    });
  });
});