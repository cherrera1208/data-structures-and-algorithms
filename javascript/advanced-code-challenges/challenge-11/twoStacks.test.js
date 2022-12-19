'use strict';

const { PseudoQueue } = require('./twoStacks.js');

describe('Testing Queue Methods:', () => {
  it('should instantiate an empty queue', () => {
    let pseudo = new PseudoQueue;

    expect(pseudo.front.top).toBeNull();
    expect(pseudo.back.top).toBeNull();
    expect(pseudo).toBeInstanceOf(PseudoQueue);
  });

  it('should raise and exception calling dequeue on an empty queue', () => {
    let pseudo = new PseudoQueue;
    let result = pseudo.dequeue();
    expect(result).toEqual('Exception');
  });

  it('should enqueue onto an empty queue', () => {
    let pseudo = new PseudoQueue;
    pseudo.enqueue('a');
    expect(pseudo.back.top.value).toEqual('a');
  });
  it('should enqueue multiple values onto a queue', () => {
    let pseudo = new PseudoQueue;
    pseudo.enqueue('a');
    pseudo.enqueue('b');
    pseudo.enqueue('c');

    expect(pseudo.back.top.value).toEqual('c');
    expect(pseudo.front.top).toBeNull();
    expect(JSON.stringify(pseudo)).toEqual('{"back":{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}},"front":{"top":null}}');
  });

  it('should dequeue the node at the front and return the value', () => {
    let pseudo = new PseudoQueue;
    pseudo.enqueue('a');
    pseudo.enqueue('b');
    pseudo.enqueue('c');
    let fullQueue = JSON.stringify(pseudo);
    let result = pseudo.dequeue();

    expect(fullQueue).toEqual('{"back":{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}},"front":{"top":null}}');
    expect(result).toEqual('a');
    expect(JSON.stringify(pseudo)).toEqual('{"back":{"top":null},"front":{"top":{"value":"b","next":{"value":"c","next":null}}}}');
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    let pseudo = new PseudoQueue;
    pseudo.enqueue('a');
    pseudo.enqueue('b');
    pseudo.enqueue('c');
    let fullQueue = JSON.stringify(pseudo);
    pseudo.dequeue();
    pseudo.dequeue();
    pseudo.dequeue();

    expect(fullQueue).toEqual('{"back":{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}},"front":{"top":null}}');
    expect(pseudo.front.top).toBeNull();
    expect(pseudo.back.top).toBeNull();
    expect(JSON.stringify(pseudo)).toEqual('{"back":{"top":null},"front":{"top":null}}');
  });
});
