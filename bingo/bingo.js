function decideCartBingo() {
  let decision;
  do {
    const cartBingo = createCartBingo(15, 5);
    console.table(cartBingo);
    decision = Window.prompt(
      "Do you want to play with this cart? Please say YES or NO"
    );
    switch (decision) {
      case "yes":
        return cartBingo;
    }
  } while (decision !== "yes");
}

function tableRanking(playerList, points) {
  let name = Window.prompt("Please insert your name");
  if (name === null) {
    name = `player ${parseInt(Math.random() * 100)}`;
  }
  playerList.push({ name, points });
  playerList.sort((a, b) => b.points - a.points);
  console.table(playerList);
  console.log(`See you soon ${name}`);
}

function playNewTurn(cart) {
  const newTurn = Window.confirm("Do you want to play this turn?");
  if (newTurn) {
    console.clear();
    console.table(cart);
    return true;
  }
  Window.alert("Good bye!");
  return false;
}
function calculatePoints(num) {
  console.log(`You play ${num} turns`);
  const points = 150 - num;
  console.log(`You have ${points} points`);
  return points;
}
function checkBingo(cartBingo) {
  for (let i = 0; i < cartBingo.length; i++) {
    for (let j = 0; j < cartBingo[i].length; j++) {
      if (cartBingo[i][j] !== "X") {
        return false;
      }
    }
  }
  return true;
}
function checkLine(bingoCart) {
  for (let i = 0; i < bingoCart.length; i++) {
    let esLinia = true;
    for (let j = 0; j < bingoCart[i].length; j++) {
      if (bingoCart[i][j] !== "X") {
        esLinia = false;
        break;
      }
    }
    if (esLinia) {
      return true;
    }
  }
  return false;
}
function playBingoGame(balls, cart, playerList) {
  console.clear();
  Window.alert("Start BINGO!");
  console.table(cart);
  let singLine = false;
  for (let turn = 0; turn < balls.length; turn++) {
    if (playNewTurn(cart)) {
      for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i].length; j++) {
          if (balls[turn] === cart[i][j]) {
            cart[i][j] = "X";
            console.table(cart);

            if (!singLine) {
              if (checkLine(cart)) {
                Window.alert("LINIA, continue to Bingo!");
                singLine = true;
              }
            }
            if (checkBingo(cart)) {
              Window.alert("BINGO");
              const points = calculatePoints(turn);
              tableRanking(playerList, points);
              return;
            }
          }
        }
      }
      console.log(`The ball is: ${balls[turn]}`);
      Window.alert(`The ball is: ${balls[turn]}`);
    } else {
      return;
    }
  }
}

const startGame = (ranking) => {
  console.log("This is the actual ranking of Bingo");
  console.table(ranking);
  const bingo = Window.confirm("Do you want to play BINGO?");
  let newCart;
  if (bingo) {
    newCart = decideCartBingo();
    return newCart;
  }
  Window.alert("See you soon");
};
function createRandomNumbers(numbers) {
  const arrayRandomNumbers = [];
  while (arrayRandomNumbers.length < numbers) {
    const cartNum = Math.floor(Math.random() * 90) + 1;
    if (arrayRandomNumbers.indexOf(cartNum) === -1)
      arrayRandomNumbers.push(cartNum);
  }
  return arrayRandomNumbers;
}
function createCartBingo(numbers, columns) {
  const arrayRandomNumbers = createRandomNumbers(numbers);
  const files = numbers / columns;
  const tableBingo = [];
  for (let i = 0; i < files; i++) {
    tableBingo.push([]);
    for (let j = 0; j < columns; j++) {
      tableBingo[i][j] = arrayRandomNumbers[i * 5 + j];
    }
  }
  return tableBingo;
}
function createBingoBalls(numbers) {
  const arrayBallNumbers = createRandomNumbers(numbers);
  return arrayBallNumbers;
}

function bingoGame() {
  const arrayRanking = [
    { name: "Maui", points: 120 },
    { name: "Vaiana", points: 100 },
    { name: "Heihei", points: 95 },
  ];

  const newCart = startGame(arrayRanking);
  const balls = createBingoBalls(90);
  playBingoGame(balls, newCart, arrayRanking);
}
