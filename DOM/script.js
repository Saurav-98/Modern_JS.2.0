let output;

output = document.all;

// console.log(output);

const listItems = document.querySelectorAll("li");

console.log(listItems[0].textContent);

listItems.forEach((item) => (item.style.color = "green"));
