'use strict';

const { AnimalShelter } = require('./animalShelter.js');


describe('Testing AnimalShelter Methods:', () => {
  it('should instantiate an empty queue', () => {
    let shelter = new AnimalShelter;

    expect(shelter.front).toBeNull();
    expect(shelter.back).toBeNull();
    expect(shelter).toBeInstanceOf(AnimalShelter);
  });

  it('should raise and exception calling dequeue on an empty queue', () => {
    let shelter = new AnimalShelter;
    let result = shelter.dequeue('dog');
    expect(result).toEqual('Empty');
  });

  it('should raise and exception calling dequeue on an empty queue', () => {
    let shelter = new AnimalShelter;
    let result = shelter.dequeue();
    expect(result).toEqual('Empty');
  });

  it('should enqueue onto an empty queue', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue('cat');
    expect(shelter.front.value).toEqual('cat');
    expect(shelter.back.value).toEqual('cat');
  });

  it('should reject enqueuing an animal that is not a cat or dog', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue('bird');
    expect(shelter.front).toBeNull();
    expect(shelter.back).toBeNull();
  });
  it('should enqueue multiple values onto a queue', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    expect(shelter.front.value).toEqual('cat');
    expect(shelter.back.value).toEqual('dog');
    expect(JSON.stringify(shelter)).toEqual('{"front":{"value":"cat","next":{"value":"cat","next":{"value":"dog","next":null}}},"back":{"value":"dog","next":null}}');
  });

  it('should dequeue the first node at the front and return the value', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('dog');

    let result = shelter.dequeue('cat');

    expect(result).toEqual('cat');
    expect(JSON.stringify(shelter)).toEqual('{"front":{"value":"cat","next":{"value":"dog","next":null}},"back":{"value":"dog","next":null}}');
  });

  it('should dequeue the first animal where head is NOT the preference and return the value', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');

    let result = shelter.dequeue('dog');
    expect(result).toEqual('dog');
    expect(shelter.front.value).toEqual('cat');
    expect(JSON.stringify(shelter)).toEqual('{"front":{"value":"cat","next":{"value":"dog","next":null}},"back":{"value":"dog","next":null}}');
  });

  it('should return null if there is no prefered animal in queue', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('dog');

    let result = shelter.dequeue('cat');
    expect(result).toBeNull();
  });

  it('should return null if trying to dequeue an animal that is NOT cat or dog', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('dog');

    let result = shelter.dequeue('bird');
    expect(result).toBeNull();
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');

    shelter.dequeue('dog');
    shelter.dequeue('cat');
    shelter.dequeue('dog');

    expect(shelter.front).toBeNull();
    expect(shelter.back).toBeNull();
    expect(JSON.stringify(shelter)).toEqual('{"front":null,"back":null}');
  });
});
