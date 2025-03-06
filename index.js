const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

// Set stroke color and line width;
canvasContext.strokeStyle = "#808080";
canvasContext.lineWidth = 1.5;

// Set background color
canvasContext.fillStyle = "#FFFFFF";
canvasContext.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;

// Drawing logic: When mouse clicked on canvas area
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  canvasContext.beginPath();
  canvasContext.moveTo(e.offsetX, e.offsetY);
});

// Drawing logic: When mouse moving on canvas area
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    canvasContext.lineTo(e.offsetX, e.offsetY);
    canvasContext.stroke();
  }
});

// Drawing logic: When mouse unclicked on canvas area
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  canvasContext.closePath();
});

// Drawing logic: When mouse leave canvas area
canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

// Clear button logics
const clearButton = document.getElementById("button-clear");

clearButton.addEventListener("click", (e) => {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
});

// Download button logics
const exportButton = document.getElementById("button-export");

exportButton.addEventListener("click", (e) => {
  const downloadElement = document.createElement("a");
  downloadElement.href = canvas.toDataURL("image/jpeg");
  downloadElement.download = "image.jpg";
  downloadElement.click();
});
