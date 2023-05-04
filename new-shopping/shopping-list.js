// Tapping the Elements
const inputEl = document.getElementById("item-input");
const formEl = document.getElementById("item-form");
const itemListEl = document.getElementById("item-list");
// Helper Functions

const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.classList = classes;
  return icon;
};
const createBtn = (classes) => {
  const btn = document.createElement("button");
  btn.classList = classes;
  const icon = createIcon("fa-solid fa-xmark");
  btn.appendChild(icon);
  return btn;
};
// // OnSubmit Function
const onSubmit = (e) => {
  e.preventDefault();

  const inputItem = inputEl.value;
  console.log(inputItem);

  if (inputItem === "") {
    alert("Please enter an Item before Submiting!!!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputItem;

  const childBtn = createBtn("remove-item btn-link text-red");
  li.appendChild(childBtn);
  itemListEl.appendChild(li);
};

// Event Listeners
formEl.addEventListener("submit", onSubmit);
