'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let node = new Node(value);

    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (this.top === null) {
      return 'Exception';
    } else {
      let removed = this.top;
      this.top = removed.next;
      removed.next = null;
      return removed.value;
    }
  }
  peek() {
    if (this.top === null) return 'Exception';
    let value = this.top.value;
    return value;
  }
  isEmpty() {
    let result;
    this.top === null ? result = true : result = false;
    return result;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    let node = new Node(value);

    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }
  dequeue() {
    if (this.front === null) return 'Exception';
    let removed = this.front;
    if (removed.next === null) {
      this.back = null;
    }
    this.front = this.front.next;
    removed.next = null;
    return removed.value;
  }
  peek() {
    if (this.front === null) return 'Exception';
    let value = this.front.value;
    return value;
  }
  isEmpty() {
    let result;
    this.front === null ? result = true : result = false;
    return result;
  }
}

class PseudoQueue {
  constructor() {
    this.back = new Stack;
    this.front = new Stack;
  }
  enqueue(val) {
    if (this.front.top === null) {
      this.back.push(val);
    } else {
      while (this.front.top) {
        let transfer = this.front.pop();
        this.back.push(transfer);
      }
      this.back.push(val);
    }
  }

  dequeue() {

    if (this.back.top === null) {
      return this.front.pop();
    } else {
      while (this.back.top) {
        let transfer = this.back.pop();
        this.front.push(transfer);
      }
      return this.front.pop();
    }
  }
}

module.exports = {
  Stack,
  Queue,
  PseudoQueue,
};
