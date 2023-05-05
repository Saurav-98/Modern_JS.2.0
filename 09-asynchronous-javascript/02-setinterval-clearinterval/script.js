const myCallback = () => {
  console.log(Date.now());
};
const intervalId = setInterval(myCallback, 200);

const stopChange = () => clearInterval(intervalId);
document.getElementById("stop").addEventListener("click", stopChange);

let intervalId = startChange;
