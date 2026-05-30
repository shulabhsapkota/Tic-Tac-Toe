let boxes = document.querySelectorAll(".box");
let turnO = true;

const winPatterns = [
  [0,1,2],[0,3,6],[0,4,8],
  [1,4,7],[2,5,8],
  [2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "O" : "X";
    turnO = !turnO;
    box.disabled = true;

    checkWinner();
  });
});

function checkWinner() {
  for (let pattern of winPatterns) {
    let a = boxes[pattern[0]].innerText;
    let b = boxes[pattern[1]].innerText;
    let c = boxes[pattern[2]].innerText;

    if (a && a === b && b === c) {
      alert(`${a} wins!`);
      disableAll();
    }
  }
}

function disableAll() {
  boxes.forEach(box => box.disabled = true);
}