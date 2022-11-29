'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  printList() {
    const arr = [];
    let currNode = this.head;
    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }
    return arr.toString();
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.printList();
console.log(myLinkedList.printList());


module.exports = LinkedList;
