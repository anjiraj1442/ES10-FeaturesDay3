//The JavaScript Array flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [1, [2, 3, 4], 5];
const flattened1 = arr1.flat();
console.log(flattened1); // [ 1, 2, 3, 4, 5 ]

const arr2 = [1, 2, [3, 4, [5, 6]]];

const flattened2 = arr2.flat();
console.log(flattened2); // [1, 2, 3, 4, [5, 6]]

const flattened3 = arr2.flat(2);
console.log(flattened3); //  [ 1, 2, 3, 4, 5, 6 ]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const flattened4 = arr4.flat(Infinity);
console.log(flattened4); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// flat() removes holes
const numArr = [1, , 3];
console.log(numArr.flat()); // [ 1, 3 ]
