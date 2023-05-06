'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// // **********  Slice Method - It Does Not Mutate the Original Array
// // console.log(arr.slice(2, 5));
// // console.log(arr.slice(1, -1));
// // // console.log(arr);

// // console.log(arr.slice());
// // console.log([...arr]);

// // **********  Splice Method - It Mutates the Original Array

// // console.log(arr.splice(-1));
// // console.log(arr.splice(3, 3));
// // console.log(arr);

// // // **********  Reverse Method - It Mutates the Original Array
// // const arr2 = ['f', 't', 'a', 'q', 'x', 'o', 'p'];
// // console.log(arr2.reverse());
// // console.log(arr2);

// // // **********  Concat Method - It Does Not Mutates the Original Array

// // const letters = arr.concat(arr2);
// // console.log(letters);
// // const letters2 = [...arr, ...arr2];
// // console.log(letters2);

// // // **********  Join Method - It Does Not Mutates the Original Array
// // // ---- Very Useful in converting array into strings
// // const joinedArr = letters.join('');
// // console.log(joinedArr);

// // ********** At Method

// // const randomArr = [23, 45, 67, 78, 22];

// // console.log(randomArr.at(-1));
// // // console.log(randomArr[1]);

// // console.log('Saurav Kumar Verma'.at(0));
// // console.log('Saurav Kumar Verma'.at(-1));

// // Looping using ForEach Array
// // Continue and Break does not work in Foreach loops
// // There is no way to break out of a foreach loop

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((move, index) =>
//   move > 0
//     ? console.log(`Transaction ${index + 1} : You Deposited ${move}`)
//     : console.log(`Transaction ${index + 1} : You withdrew ${Math.abs(move)}`)
// );

// // ForEach loops on Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies);

// currencies.forEach((val, key, map) => {
//   console.log(`${key} : ${val}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'INR']);

// console.log(currenciesUnique);

// currenciesUnique.forEach((val, key, set) => {
//   console.log(`${key} : ${val}`);
// });

// DATA TRANSFORMATIONS WITH MAP, FILTER AND REDUCE

const eurToUsd = 1.1;

// const movementsUsd = movements.map(move => move * eurToUsd);
// console.log(movements);
// console.log(movementsUsd);

// const depositMovements = movements.filter(movement => movement >= 0);
// const withdrawalMovements = movements.filter(movement => movement < 0);
// console.log(depositMovements);
// console.log(withdrawalMovements);

// console.log(movements.reduce((acc, crr) => acc + crr, 0));

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

// console.log(movements.find(mov => mov < 0));

const account01 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account02 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account03 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account04 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const accounts11 = [account11, account21, account31, account41];

// const account = accounts11.find(acc => (acc.owner = 'Jessica Davis'));

// // console.log(account);

// for (let a of accounts11) {
//   if (a.owner === 'Jessica Davis') {
//     console.log(a);
//   }
// }

// console.log(movements.includes(-130));

// console.log(movements.some(arr => arr > 1500));

// const arr = [[1, [2, 3]], [4, 5], [[6, 7], 8], 9, 2];
// console.log(arr);
// console.log(arr.flat(2));

// console.log(movements);
// // console.log(movements.sort());

// console.log(movements.sort((a, b) => b - a));

// const x = new Array(7);
// x.fill(1, 3, 6);
// console.log(x);

const accounts01 = [account01, account02, account03, account04];

const bankDepositSum = accounts01
  .flatMap(arr => arr.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

//
const numDeposits1000 = accounts01
  .flatMap(arr => arr.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);
//
const sums = accounts01
  .flatMap(arr => arr.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'of'];
console.log(sums);
const converTitleCase = title =>
  title
    .split(' ')
    .map(word =>
      exceptions.includes(word)
        ? word
        : word.at(0).toUpperCase().concat(word.slice(1))
    )

    .join(' ');
console.log(
  converTitleCase('this is a nice title of the World but not too long.')
);
