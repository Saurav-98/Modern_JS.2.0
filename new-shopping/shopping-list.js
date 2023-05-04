// Tapping the Elements
const inputEl = document.getElementById("item-input");
const formEl = document.getElementById("item-form");
const itemListEl = document.getElementById("item-list");
const removeItemBtn = document.querySelectorAll(".remove-item");
const clearBtn = document.getElementById("clear");
const filterEl = document.getElementById("filter");
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
  inputEl.value = "";
  checkUi();
};

const removeItem = (e) => {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure to delete this item?")) {
      e.target.parentElement.parentElement.remove();
    }

    checkUi();
  }
};

const clearAll = (e) => {
  while (itemListEl.firstChild) {
    itemListEl.removeChild(itemListEl.firstChild);
  }
  checkUi();
};

const checkUi = () => {
  const items = itemListEl.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    filterEl.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    filterEl.style.display = "block";
  }
};

// Event Listeners
formEl.addEventListener("submit", onSubmit);
itemListEl.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearAll);
checkUi();
