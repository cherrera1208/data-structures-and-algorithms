'use strict';

const insertionSort = require('./insertion-sort.js');

describe('testing the insertionSort function', () => {

  it('should return the original array with all values numerically sorted in order', () => {
    let arr1 = [8, 4, 23, 42, 16, 15];
    let arr2 = [6, 5, 4, 3, 2, 1];
    expect(insertionSort(arr1)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(insertionSort(arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
