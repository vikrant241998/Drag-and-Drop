console.log("Jai shree ganesh");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

// Event listner for Draggable element imgBox
imgBox.addEventListener("dragstart", (e) => {
  console.log("Drag has been start");
  e.target.className += " hold";

  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

// Event listner for Draggable element imgBox
imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
  console.log("Drag has been End");
});

for (let whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("DragOver has been triggered");
  });

  whiteBox.addEventListener("dragenter", (e) => {
    e.target.append(imgBox);
    console.log("Dragenter has been triggered");
  });

  whiteBox.addEventListener("dragleave", () => {
    console.log("Dragleave has been triggered");
  });

  whiteBox.addEventListener("drop", (e) => {
    e.target.append(imgBox);
    console.log("drop has been triggered");
  });
}
