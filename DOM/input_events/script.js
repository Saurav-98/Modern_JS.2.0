// // const checkboxInput = document.getElementById("checkbox");
// // const heading = document.querySelector("h1");

// const form = document.getElementById("item-form");

// const onSubmit = (e) => {
//   e.preventDefault();
//   const itemInput = document.getElementById("item-input");
//   const priorityInput = document.getElementById("priority-input");

//   if (itemInput === "" || priorityInput === "0") {
//     alert("Please fill in all fields");
//     return;
//   }

//   console.log(itemInput.value);
//   console.log(priorityInput.value);
// };

// const onInput = (e) => {
//   // console.log(e.target.value);
//   heading.textContent = e.target.value;
// };

// const onChecked = (e) => {
//   const isChecked = e.target.checked;
//   heading.textContent = isChecked ? "Checked" : "Not Checked";
// };

// const onFocus = (e) => {
//   console.log("Input is Focused");
//   itemInput.style.outline = "2px solid goldenrod";
//   itemInput.style.backgroundColor = "skyblue";
//   itemInput.style.color = "whitesmoke";
// };
// const onBlur = (e) => {
//   console.log("Input is Blurred!!!");
// };

// // itemInput.addEventListener("input", onInput);

// // priorityInput.addEventListener("input", onInput);

// // checkboxInput.addEventListener("input", onChecked);

// // itemInput.addEventListener("focus", onFocus);
// // itemInput.addEventListener("blur", onBlur);

// form.addEventListener("submit", onSubmit);

const button = document.querySelector("form button");
const btnDiv = document.getElementById("lst-btn-div");
btnDiv.style.backgroundColor = "red";
console.log(btnDiv);

const formEl = document.querySelector("form");

button.addEventListener("click", (e) => {
  alert("Button!!! was clicked!");
  e.stopPropagation();
});

btnDiv.addEventListener("click", () => {
  alert("Div was Clicked");
});
formEl.addEventListener("click", () => {
  alert("Form was Clicked");
});

document.body.addEventListener("click", () => {
  alert("Body wasClicked");
});
