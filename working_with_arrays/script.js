'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// **********  Slice Method - It Does Not Mutate the Original Array
// console.log(arr.slice(2, 5));
// console.log(arr.slice(1, -1));
// // console.log(arr);

// console.log(arr.slice());
// console.log([...arr]);

// **********  Splice Method - It Mutates the Original Array

// console.log(arr.splice(-1));
// console.log(arr.splice(3, 3));
// console.log(arr);

// // **********  Reverse Method - It Mutates the Original Array
// const arr2 = ['f', 't', 'a', 'q', 'x', 'o', 'p'];
// console.log(arr2.reverse());
// console.log(arr2);

// // **********  Concat Method - It Does Not Mutates the Original Array

// const letters = arr.concat(arr2);
// console.log(letters);
// const letters2 = [...arr, ...arr2];
// console.log(letters2);

// // **********  Join Method - It Does Not Mutates the Original Array
// // ---- Very Useful in converting array into strings
// const joinedArr = letters.join('');
// console.log(joinedArr);

// ********** At Method

// const randomArr = [23, 45, 67, 78, 22];

// console.log(randomArr.at(-1));
// // console.log(randomArr[1]);

// console.log('Saurav Kumar Verma'.at(0));
// console.log('Saurav Kumar Verma'.at(-1));

// Looping using ForEach Array
// Continue and Break does not work in Foreach loops
// There is no way to break out of a foreach loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((move, index) =>
  move > 0
    ? console.log(`Transaction ${index + 1} : You Deposited ${move}`)
    : console.log(`Transaction ${index + 1} : You withdrew ${Math.abs(move)}`)
);

// ForEach loops on Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);

currencies.forEach((val, key, map) => {
  console.log(`${key} : ${val}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'INR']);

console.log(currenciesUnique);

currenciesUnique.forEach((val, key, set) => {
  console.log(`${key} : ${val}`);
});
