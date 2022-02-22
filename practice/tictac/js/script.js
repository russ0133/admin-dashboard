// HEADER
const $div_grid = document.querySelectorAll(".grid");
const $div_gridText = [];
const $btn_reset = document.querySelector("#reset");

// MODULES OR IIFES
const gameBoard = new Array(9);

// ! I sum the index of all the played squares to see if it equals to pre defined amount
let totalSum = 0;
let totalMoves = 0;
// TODO: Algorithm for finding who's the winner

const Player = (id) => {
  let score;
  const click = (target, index) => {
    totalMoves++;
    target.innerText = id;
    gameBoard[index] = id;
    totalSum += index;
    gameController.verifyWinCondition(totalSum);
  };
  return { click };
};

const gameController = (() => {
  let lastClick = null; // Saves the ID (0-8) of the last click to check winner later
  const init = () => {
    // -> Listens for clicks on the grid.
    $div_grid.forEach((element, index) => {
      element.addEventListener("click", function (e) {
        if (gameBoard[index] != null)
          return console.log("Already played here.");

        user.click(e.target, index);
        lastClick = index;
      });
    });

    // -> Listens for clicks on the reset button
    $btn_reset.addEventListener("click", function (e) {
      resetGame();
    });

    resetGame();
    console.log("gameController: board initialized.");
  };

  const resetGame = () => {
    for (i = 0; i < gameBoard.length; i++) {
      // -> Resets the grid to ""
      for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = null;
      }
    }
    $div_grid.forEach((element) => {
      element.innerText = "";
    });
    console.log("game resetted");
  };

  const verifyWinCondition = (n) => {
    console.log(totalSum);
    if (totalMoves != 3) return console.log("debug win");
    if (n == 9 || n == 12 || n == 15 || n == 4 || n == 21) {
      // 9, 12 and 15 are the sum of every possible vertical and diagonal indexes to find a winner
      // 4, 12 and 21 are the sum of every possible horizontal indexes
      totalSum = 0;
      window.alert("hey you won");
      totalMoves = 0;
      resetGame();
    }
  };
  return { init, verifyWinCondition };
})();

const user = Player("X");
gameController.init();
