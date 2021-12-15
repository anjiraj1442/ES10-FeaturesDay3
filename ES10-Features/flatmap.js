const arr1 = [1, 2, 3, 4, 5];

const newArr1 = arr1.flatMap((x) => [x ** 2]);
console.log(newArr1); // [ 1, 2, 3, 4, 5 ]

// can also be done as
const intermediate = arr1.map((x) => [x ** 2]);
console.log(intermediate); // [ [ 1 ], [ 4 ], [ 9 ], [ 16 ], [ 25 ] ]

const newArr2 = intermediate.flat();
console.log(newArr2); // [ 1, 4, 9, 16, 25 ]

const numbers = [1, 2, 3, 4, 5, 6, 7];

// remove odd and split even element to two half elements
function func(n) {
  if (n % 2 === 0) {
    return [n / 2, n / 2];
  } else {
    return [];
  }
}
const newArr3 = numbers.flatMap(func);
console.log(newArr3); // [ 1, 1, 2, 2, 3, 3 ]