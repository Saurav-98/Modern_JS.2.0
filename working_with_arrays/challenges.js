// // // const juliaArr = [3, 5, 2, 12, 7];
// // // const kateArr = [4, 1, 15, 8, 3];
// // // const juliaArr2 = [9, 16, 6, 8, 3];
// // // const kateArr2 = [10, 5, 6, 1, 4];

// // // const dogsChallenge = (dogs1, dogs2) => {
// // //   const correctedDogs1 = dogs1.slice(1, 3);
// // //   const dogs = correctedDogs1.concat(dogs2);

// // //   console.log(dogs);

// // //   dogs.forEach((dog, i) =>
// // //     dog >= 3
// // //       ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
// // //       : console.log(`Dog number ${i + 1} is still a puppy 🐶`)
// // //   );
// // // };

// // // dogsChallenge(juliaArr, kateArr);
// // // dogsChallenge(juliaArr2, kateArr2);

// // const data1 = [5, 2, 4, 1, 15, 8, 3];
// // const data2 = [16, 6, 10, 5, 6, 1, 4];

// // const calcAverageHumanAge = data => {
// //   const humanAge = data.map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4));
// //   const filteredDogs = humanAge.filter(dog => dog >= 18);
// //   const average =
// //     filteredDogs.reduce((acc, cur) => acc + cur, 0) / filteredDogs.length;
// //   // const average = filteredDogs.reduce(
// //   //   (acc, cur, i, arr) => acc + cur / arr.length,
// //   //   0
// //   // );
// //   return average;
// // };

// // // console.log(calcAverageHumanAge(data1));
// // // console.log(calcAverageHumanAge(data2));

// // const calcAverageHumanAge2 = data => {
// //   return data
// //     .map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4))
// //     .filter(dog => dog >= 18)
// //     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// // };

// // // console.log(calcAverageHumanAge2(data1));
// // // console.log(calcAverageHumanAge2(data2));

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
// // Task 01
// dogs.map(dog => {
//   const recommendedFood = dog.weight ** 0.75 * 28;
//   dog.recommendedFood = recommendedFood;
// });

// console.log(dogs);
// // Task 02

// const dogsEatingSummary = dog => {
//   if (dog.curFood > dog.recommendedFood * 1.1) {
//     return 'too much';
//   } else if (dog.curFood < dog.recommendedFood * 0.9) {
//     return 'too less';
//   } else {
//     return 'perfect';
//   }
// };

// const sarahsDogSummary = dogs => {
//   const sarahsDog = dogs.filter(dog => dog.owners.includes('Sarah'));

//   console.log(`Sarah's dog is eating ${dogsEatingSummary(sarahsDog)}`);
// };
// sarahsDogSummary(dogs);
// // Task 03
// const ownersEatTooMuch = dogs
//   .filter(dog => dogsEatingSummary(dog) === 'too much')
//   .flatMap(dog => dog.owners);
// const ownersEatTooLittle = dogs
//   .filter(dog => dogsEatingSummary(dog) === 'too less')
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too less!`);

// Challenge excepted
// Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

const dogEatingSummary = dog => {
  if (
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
  ) {
    return 'okay';
  } else if (dog.curFood < dog.recommendedFood * 0.9) {
    return 'too less';
  } else {
    return 'too much';
  }
};

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(sarahDog);

console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
  }`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
//
console.log(dogs.some(dog => dog.curFood === dog.recFood));
//
console.log(dogs.some(dog => checkEatingOkay(dog)));
const okayDogs = dogs.filter(dog => checkEatingOkay(dog));
console.log(okayDogs);

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsCopy);
