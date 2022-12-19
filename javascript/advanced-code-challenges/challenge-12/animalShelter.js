'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(animal) {
    if (animal.toLowerCase() !== 'dog' && animal.toLowerCase() !== 'cat') {
      console.log(`Can Not Accept ${animal}'(s) at this Shelter`);
      return null;
    }
    let node = new Node(animal.toLowerCase());

    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }
  dequeue(pref) {
    let preference = pref ? pref.toLowerCase() : null;
    if (this.front === null) return 'Empty';
    if (preference !== 'dog' && preference !== 'cat') {
      console.log(`This Shelter Does Not Carry ${pref}'(s)!`);
      return null;
    }
    if (this.front.value === preference) {
      let nodeToRemove = this.front;
      if (nodeToRemove.next === null) {
        this.back = null;
      }
      this.front = this.front.next;
      nodeToRemove.next = null;
      return nodeToRemove.value;
    } else {
      let current = this.front;
      while (current.next) {
        if (current.next.value === preference) {
          let remove = current.next;
          current.next = remove.next;
          remove.next = null;
          return remove.value;
        }
        current = current.next;
      }
      return null;
    }
  }
}

module.exports = {
  AnimalShelter,
};
