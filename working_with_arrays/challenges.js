const juliaArr = [3, 5, 2, 12, 7];
const kateArr = [4, 1, 15, 8, 3];

const juliaCorrectedArr = juliaArr.slice(1, 4);

const resultantArr = juliaCorrectedArr.concat(kateArr);
resultantArr.forEach((dog, index) => {
  if (dog >= 3) {
    console.log(`Dog number ${index + 1} is an adult, and is ${dog} years old`);
  } else {
    console.log(`Dog number ${index + 1} is still a puppy 🐶`);
  }
});
