// Tapping the Elements
const inputEl = document.getElementById("item-input");
const formEl = document.getElementById("item-form");
const itemListEl = document.getElementById("item-list");
const removeItemBtn = document.querySelectorAll(".remove-item");
const clearBtn = document.getElementById("clear");
const filterEl = document.getElementById("filter");
const formBtn = document.getElementById("submit-btn");
let isEditMode = false;
// Helper Functions

const displayItems = () => {
  const itemsFromStorage = getItemToStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUi();
};

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
const onAddItemSubmit = (e) => {
  e.preventDefault();

  const inputItem = inputEl.value;
  if (inputItem === "") {
    alert("Please enter an Item before Submiting!!!");
    return;
  }
  addItemToDOM(inputItem);
  addItemToStorage(inputItem);
  inputEl.value = "";
  checkUi();
};

const addItemToDOM = (item) => {
  const li = document.createElement("li");
  li.textContent = item;
  const childBtn = createBtn("remove-item btn-link text-red");
  li.appendChild(childBtn);
  itemListEl.appendChild(li);
};

const addItemToStorage = (item) => {
  const itemsFromStorage = getItemToStorage();

  itemsFromStorage.push(item);

  // convert to JSON and set to localstorage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
};
const onClickItem = (e) => {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
};
const setItemToEdit = (item) => {
  isEditMode = true;
  item.style.color = "#bbb";
  formBtn.innerHTML = `<iclass="fa-solid fa-pen"></i>  Update Item`;
  inputEl.value = item.textContent;
};
const removeItem = (item) => {
  if (confirm("Are you sure??")) {
    item.remove();

    removeItemFromStorage(item.textContent);

    checkUi();
  }
  // console.log(item);
};
const removeItemFromStorage = (itemText) => {
  let itemsFromStorage = getItemToStorage();

  // console.log(itemsFromStorage);

  itemsFromStorage = itemsFromStorage.filter((i) => i !== itemText);

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
};
const clearAll = (e) => {
  while (itemListEl.firstChild) {
    itemListEl.removeChild(itemListEl.firstChild);
  }
  localStorage.removeItem("items");
  checkUi();
};

const filterList = (e) => {
  const text = e.target.value.toLowerCase();
  console.log(text);
  const items = itemListEl.querySelectorAll("li");

  items.forEach((item) => {
    const itemText = item.textContent.trim().toLowerCase();

    if (itemText.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
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

const getItemToStorage = () => {
  let itemsFromStorage;
  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromStorage;
};

// Initialize App
const init = () => {
  // Event Listeners
  formEl.addEventListener("submit", onAddItemSubmit);
  itemListEl.addEventListener("click", onClickItem);
  clearBtn.addEventListener("click", clearAll);
  checkUi();
  filterEl.addEventListener("input", filterList);
  document.addEventListener("DOMContentLoaded", displayItems);
};

init();
