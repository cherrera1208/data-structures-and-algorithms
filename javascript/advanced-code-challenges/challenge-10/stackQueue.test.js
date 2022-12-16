const { Queue, Stack } = require('./stackQueue.js');

describe('Testing Stack Methods:', () => {

  it('add to stack', () => {
    let stack = new Stack;
    stack.push('a');
    expect(stack.top.value).toEqual('a');
  });
});

describe('Testing Queue Methods:', () => {

  it('add to queue', () => {
    let queue = new Queue;
    queue.enqueue('a');
    expect(queue.front.value).toEqual('a');
    expect(queue.back.value).toEqual('a');
  });
});
