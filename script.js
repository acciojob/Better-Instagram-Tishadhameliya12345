//your code here
const parent = document.getElementById("parent");
let draggedElement = null;

parent.addEventListener("dragstart", (e) => {
  draggedElement = e.target;
  e.target.classList.add("selected");
});

parent.addEventListener("dragend", (e) => {
  e.target.classList.remove("selected");
});

parent.addEventListener("dragover", (e) => {
  e.preventDefault();
});

parent.addEventListener("drop", (e) => {
  e.preventDefault();
  const target = e.target;

  // Ensure only dropping on another draggable element
  if (target !== draggedElement && target.classList.contains("image")) {
    // Swap contents (text and styles) between draggedElement and target
    const tempHTML = draggedElement.innerHTML;
    const tempBackground = draggedElement.style.backgroundImage;

    draggedElement.innerHTML = target.innerHTML;
    draggedElement.style.backgroundImage = target.style.backgroundImage;

    target.innerHTML = tempHTML;
    target.style.backgroundImage = tempBackground;
  }
});