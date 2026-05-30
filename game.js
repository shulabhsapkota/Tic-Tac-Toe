let boxes = document.querySelectorAll(".box");
let turnO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "O" : "X";
    turnO = !turnO;
    box.disabled = true;
  });
});