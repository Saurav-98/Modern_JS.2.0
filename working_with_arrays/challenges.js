const juliaArr = [3, 5, 2, 12, 7];
const kateArr = [4, 1, 15, 8, 3];
const juliaArr2 = [9, 16, 6, 8, 3];
const kateArr2 = [10, 5, 6, 1, 4];

const dogsChallenge = (dogs1, dogs2) => {
  const correctedDogs1 = dogs1.slice(1, 3);
  const dogs = correctedDogs1.concat(dogs2);

  console.log(dogs);

  dogs.forEach((dog, i) =>
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`)
  );
};

dogsChallenge(juliaArr, kateArr);
dogsChallenge(juliaArr2, kateArr2);
