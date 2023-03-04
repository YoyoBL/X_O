let $cell1 = document.getElementById("cell1");
let $cell2 = document.getElementById("cell2");
let $cell3 = document.getElementById("cell3");
let $cell4 = document.getElementById("cell4");
let $cell5 = document.getElementById("cell5");
let $cell6 = document.getElementById("cell6");
let $cell7 = document.getElementById("cell7");
let $cell8 = document.getElementById("cell8");
let $cell9 = document.getElementById("cell9");

let $xScore = document.getElementById("x-score");
let $yScore = document.getElementById("y-score");

let cells = [
  $cell1,
  $cell2,
  $cell3,
  $cell4,
  $cell5,
  $cell6,
  $cell7,
  $cell8,
  $cell9,
];

let symbolType = 1;

function cellClick(cellName) {
  if (cellName.innerHTML !== "X" && cellName.innerHTML !== "O") {
    if (symbolType === 1) {
      cellName.innerHTML = "X";
      symbolType--;
    } else if (symbolType === 0) {
      cellName.innerHTML = "O";
      symbolType++;
    }
  }
  setTimeout(() => checkIfXWin());
}

//Winning conditions
let xScore = 0;
$xScore.innerHTML = xScore;

let yScore = 0;
$yScore.innerHTML = yScore;

function checkIfXWin() {
  function declareXWinner() {
    alert("X Won!");
    for (let cell of cells) {
      cell.innerHTML = "";
    }
    xScore++;
    $xScore.innerHTML = xScore;
  }

  function declareOWinner() {
    alert("O Won!");
    for (let cell of cells) {
      cell.innerHTML = "";
    }
    yScore++;
    $yScore.innerHTML = yScore;
  }

  if (
    ($cell1.innerHTML === "X" &&
      $cell2.innerHTML === "X" &&
      $cell3.innerHTML === "X") ||
    ($cell4.innerHTML === "X" &&
      $cell5.innerHTML === "X" &&
      $cell6.innerHTML === "X") ||
    ($cell7.innerHTML === "X" &&
      $cell8.innerHTML === "X" &&
      $cell9.innerHTML === "X") ||
    ($cell1.innerHTML === "X" &&
      $cell4.innerHTML === "X" &&
      $cell7.innerHTML === "X") ||
    ($cell2.innerHTML === "X" &&
      $cell5.innerHTML === "X" &&
      $cell8.innerHTML === "X") ||
    ($cell3.innerHTML === "X" &&
      $cell6.innerHTML === "X" &&
      $cell9.innerHTML === "X") ||
    ($cell1.innerHTML === "X" &&
      $cell5.innerHTML === "X" &&
      $cell9.innerHTML === "X") ||
    ($cell3.innerHTML === "X" &&
      $cell5.innerHTML === "X" &&
      $cell7.innerHTML === "X")
  ) {
    declareXWinner();
  } else if (
    ($cell1.innerHTML === "O" &&
      $cell2.innerHTML === "O" &&
      $cell3.innerHTML === "O") ||
    ($cell4.innerHTML === "O" &&
      $cell5.innerHTML === "O" &&
      $cell6.innerHTML === "O") ||
    ($cell7.innerHTML === "O" &&
      $cell8.innerHTML === "O" &&
      $cell9.innerHTML === "O") ||
    ($cell1.innerHTML === "O" &&
      $cell4.innerHTML === "O" &&
      $cell7.innerHTML === "O") ||
    ($cell2.innerHTML === "O" &&
      $cell5.innerHTML === "O" &&
      $cell8.innerHTML === "O") ||
    ($cell3.innerHTML === "O" &&
      $cell6.innerHTML === "O" &&
      $cell9.innerHTML === "O") ||
    ($cell1.innerHTML === "O" &&
      $cell5.innerHTML === "O" &&
      $cell9.innerHTML === "O") ||
    ($cell3.innerHTML === "O" &&
      $cell5.innerHTML === "O" &&
      $cell7.innerHTML === "O")
  ) {
    declareOWinner();
  }
}
