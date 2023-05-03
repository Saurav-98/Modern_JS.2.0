const clearBtn = document.querySelector("#clear");

const listEl = document.getElementById("item-list");
const items = document.querySelectorAll("li");

const clearItems = () => {
  items.forEach((item) => item.remove());
};

clearBtn.addEventListener("click", clearItems);

const logo = document.querySelector("img");

const onClick = () => console.log("Click EVent");
const onRightClick = () => console.log("Right Click EVent");
const onMouseDown = () => console.log("Mouse down Event");
const onWheel = () => console.log("Mouse Wheel Event");
const onMouseOver = () => console.log("Mouse is Over");
const onMouseOut = () => console.log("Mouse is Moved");
const onDblClick = () => {
  console.log("Double Click");
  if (document.body.style.backgroundColor !== "goldenrod") {
    document.body.style.backgroundColor = "goldenrod";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "skyblue";
    document.body.style.color = "darkblue";
  }
};

// Event Listeners

logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDblClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("wheel", onWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);
// logo.addEventListener("mouseup", console.log(object));
