// // const socials = ["Twitter", "Linkedin", "Facebook", "Instagram"];

// // socials.forEach((item, index, array) =>
// //   console.log(`${index} - ${item} ${array}`)
// // );

// // const random = [23, 45, 12, 67, 34];

// // const sum = random.reduce((previousValue, currentValue) => {
// //   return previousValue + currentValue;
// // }, 0);
// // console.log(sum);

// // const sum3 = () => {
// //   let acc = 0;
// //   for (const cur of random) {
// //     acc += cur;
// //   }
// //   return acc;
// // };

// // console.log(sum3());

// // console.log(sum);

// // const data = [
// //   {
// //     name: "John",
// //     age: 25,
// //     occupation: "Engineer",
// //     salary: 5000,
// //   },
// //   {
// //     name: "Jane",
// //     age: 32,
// //     occupation: "Doctor",
// //     salary: 8000,
// //   },
// //   {
// //     name: "Bob",
// //     age: 40,
// //     occupation: "Teacher",
// //     salary: 4000,
// //   },
// //   {
// //     name: "Emily",
// //     age: 29,
// //     occupation: "Lawyer",
// //     salary: 7000,
// //   },
// //   {
// //     name: "Michael",
// //     age: 35,
// //     occupation: "Architect",
// //     salary: 6000,
// //   },
// //   {
// //     name: "Sarah",
// //     age: 42,
// //     occupation: "Accountant",
// //     salary: 5500,
// //   },
// //   {
// //     name: "Tom",
// //     age: 31,
// //     occupation: "Software Developer",
// //     salary: 6500,
// //   },
// // ];

// // // const personNames = data.map((person) => person.name);
// // // console.log(personNames);
// // // const personInfo = data.map((person) => {
// // //   const { name, salary } = person;
// // //   return { name, salary };
// // // });
// // // console.log(personInfo);

// // // // const result = random.map((num) => console.log(num));
// // // const doubledNum = random.map((num) => num * 2);
// // // console.log(doubledNum);
// // // const socialObjs = [
// // //   {
// // //     name: "Twitter",
// // //     url: "https://twitter.com",
// // //   },
// // //   {
// // //     name: "Facebook",
// // //     url: "https://facebook.com",
// // //   },
// // //   {
// // //     name: "Instagram",
// // //     url: "https://instagram.com",
// // //   },
// // //   {
// // //     name: "Linkedin",
// // //     url: "https://linkedin.com",
// // //   },
// // //   {
// // //     name: "Snapchat",
// // //     url: "https://snapchat.com",
// // //   },
// // // ];

// // // socialObjs.forEach((item) => console.log(item.url));

// // // // Filter Method

// // // const animals = [
// // //   "Cat",
// // //   "Dog",
// // //   "Fish",
// // //   "Bird",
// // //   "Mouse",
// // //   "Rabbit",
// // //   "Squirrel",
// // //   "Elephant",
// // //   "Giraffe",
// // //   "Hippopotamus",
// // //   "Lion",
// // //   "Tiger",
// // //   "Bear",
// // //   "Deer",
// // //   "Fox",
// // //   "Wolf",
// // //   "Coyote",
// // //   "Raccoon",
// // //   "Skunk",
// // //   "Opossum",
// // // ];

// // // const bigAnimals = animals.filter((animal) => animal.length < 5);

// // // console.log(bigAnimals);

// // // const richPeople = data.filter((person) => person.salary > 6000);

// // // console.log(richPeople);

// // // const youndPeople = data.filter((person) => person.age < 30);
// // // console.log(youndPeople);

// // // const richAndYoungPeople = data.filter(
// // //   (person) => person.age < 30 && person.salary > 6000
// // // );

// const cart = [
//   { id: 1, name: "Product 1", price: 140 },
//   { id: 2, name: "Product 2", price: 240 },
//   { id: 3, name: "Product 3", price: 180 },
//   { id: 4, name: "Product 4", price: 50 },
//   { id: 12, name: "Product 11", price: 1240 },
//   { id: 21, name: "Product 25", price: 30 },
//   { id: 34, name: "Product 34", price: 780 },
//   { id: 45, name: "Product 44", price: 560 },
// ];

// const cartSum = () => {
//   const total = cart.reduce((acc, cur) => {
//     return acc + cur.price;
//   }, 0);

//   return total;
// };

// console.log(cartSum());

// const total2 = cart.reduce((acc, product) => acc + product.price, 0);
// console.log(total2);
