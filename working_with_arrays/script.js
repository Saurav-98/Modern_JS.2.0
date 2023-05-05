'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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
