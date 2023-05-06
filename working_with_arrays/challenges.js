// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [4, 1, 15, 8, 3];
// const juliaArr2 = [9, 16, 6, 8, 3];
// const kateArr2 = [10, 5, 6, 1, 4];

// const dogsChallenge = (dogs1, dogs2) => {
//   const correctedDogs1 = dogs1.slice(1, 3);
//   const dogs = correctedDogs1.concat(dogs2);

//   console.log(dogs);

//   dogs.forEach((dog, i) =>
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//   );
// };

// dogsChallenge(juliaArr, kateArr);
// dogsChallenge(juliaArr2, kateArr2);

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = data => {
  const humanAge = data.map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4));
  const filteredDogs = humanAge.filter(dog => dog >= 18);
  const average =
    filteredDogs.reduce((acc, cur) => acc + cur, 0) / filteredDogs.length;
  // const average = filteredDogs.reduce(
  //   (acc, cur, i, arr) => acc + cur / arr.length,
  //   0
  // );
  return average;
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));

const calcAverageHumanAge2 = data => {
  return data
    .map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter(dog => dog >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
};

console.log(calcAverageHumanAge2(data1));
console.log(calcAverageHumanAge2(data2));
