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

// Function to display Transactions
const displayTransactions = (transactions, sort = false) => {
  containerMovements.innerHTML = '';
  const movs = sort ? transactions.slice().sort((a, b) => a - b) : transactions;
  movs.forEach((transaction, index) => {
    const transactionType = transaction > 0 ? 'deposit' : 'withdrawal';
    const transactionHtml = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transactionType}">${
      index + 1
    } ${transactionType}</div>          
          <div class="movements__value">${transaction}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', transactionHtml);
  });
};
// Function to compute a username

const createUserNames = accounts => {
  accounts.forEach(account => {
    const user = account.owner;
    account.username = user
      .split(' ')
      .map(item => item.charAt(0).toLowerCase())
      .join('');
  });
};

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const deductions = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${deductions}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumInterest.textContent = `${interest}€`;
};

createUserNames(accounts);

// console.log(accounts);

// Event Listeners

let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    // Display UI and Message
    labelWelcome.textContent = `WelcomeBack, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;
    // Display Movements  SUmmary and Balance

    // calcDisplaySummary(currentAccount);
    // displayTransactions(currentAccount.movements);
    // calcDisplayBalance(currentAccount);
    updateUI(currentAccount);

    // Clear Input Fields
    inputLoginUsername.textContent = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAccount);

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.textContent = '';
  inputTransferTo.textContent = '';
});

const updateUI = acc => {
  calcDisplaySummary(acc);
  displayTransactions(acc.movements);
  calcDisplayBalance(acc);
};

// btnClose.addEventListener('click', e => {
//   e.preventDefault();

//   const closeUser = inputCloseUsername.value;
//   const closePin = Number(inputClosePin.value);

//   if (
//     closeUser === currentAccount.username &&
//     closePin === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );

//     console.log(index);
//     // account.splice(index, 1);
//   }
// });

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    containerApp.style.opacity = 0;
    console.log(index);
  }

  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});
let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayTransactions(currentAccount.movements, !sorted);
  sorted = !sorted;
});
