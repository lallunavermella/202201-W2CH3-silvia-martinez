function bingo() {
    let arrayRanking =
    [{name: "Maui", points: 120},
    {name: "Vaiana", points: 100},
    {name: "Heihei", points:95 }]

    let newCart = startGame(arrayRanking)
    let balls = createBingoBalls(90);
    playBingoGame(balls, newCart,arrayRanking);
}

let startGame = function (ranking) {
    console.log("This is the actual ranking of Bingo")
    console.table(ranking)
    let bingo = confirm("Do you want to play BINGO?")
    let newCart
    if (bingo) {
        newCart = decideCartBingo()
        return newCart
    } else {
        alert("See you soon")
    }
    return
}

function decideCartBingo() {
    let decision
    do {
        let cartBingo = createCartBingo(15, 5)
        console.table(cartBingo)
        decision = prompt("Do you want to play with this cart? Please say YES or NO")
        switch (decision) {
            case 'yes':
                return cartBingo
        }
    } while (decision !== "yes")
}

function createRandomNumbers(numbers) {
    let arrayRandomNumbers = [];
    while (arrayRandomNumbers.length < numbers) {
        let cartNum = Math.floor(Math.random() * 90) + 1;
        if (arrayRandomNumbers.indexOf(cartNum) === -1) arrayRandomNumbers.push(cartNum);
    }
    return arrayRandomNumbers
}

function createCartBingo(numbers, columns) {
    let arrayRandomNumbers = createRandomNumbers(numbers)
    let files = numbers / columns
    let tableBingo = []
    for (let i = 0; i < files; i++) {
        tableBingo.push([])
        for (let j = 0; j < columns; j++) {
            tableBingo[i][j] = arrayRandomNumbers[(i * 5) + j]
        }
    }
    return tableBingo
}

function createBingoBalls(numbers) {
    let arrayBallNumbers = createRandomNumbers(numbers)
    return arrayBallNumbers
}

function playNewTurn(cart) {
    let newTurn = confirm("Do you want to play this turn?")
    if (newTurn) {
        console.clear()
        console.table(cart)
        return true
    } else {
        alert ("Good bye!")
        return false
    }
}

function playBingoGame(balls, cart, playerList) {
    console.clear()
    alert("Start BINGO!")
    console.table(cart)
    let singLine = false
    for (let turn = 0; turn < balls.length; turn++) {
        if (playNewTurn(cart)) {

            for (let i = 0; i < cart.length; i++) {
                for (let j = 0; j < cart[i].length; j++) {
                    if (balls[turn] === cart[i][j]) {
                        cart[i][j] = 'X'
                        console.table(cart)

                        if(!singLine){
                            if(checkLine(cart)){
                                alert("LINIA, continue to Bingo!")
                                singLine = true;
                            }
                        }
                        if(checkBingo(cart)){
                            alert("BINGO")
                            let points = calculatePoints(turn)
                            tableRanking(playerList ,points)
                            return
                        }
                    }
                }
            }
            console.log(`The ball is: ${balls[turn]}`)
            alert(`The ball is: ${balls[turn]}`)
        } else {
            return
        }
    }
}

function checkLine(bingoCart) {
    for (let i = 0; i < bingoCart.length; i++) {
        let esLinia = true
        for (let j = 0; j < bingoCart[i].length; j++) {
            if (bingoCart[i][j] !== 'X') {
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

function checkBingo(cartBingo) {
    for (let i = 0; i < cartBingo.length; i++) {
        for (let j = 0; j < cartBingo[i].length; j++) {
            if (cartBingo[i][j] !== 'X') {
                return false;
            }
        }
    }
    return true
}
function calculatePoints(num){
    console.log(`You play ${num} turns`)
    let points = 150 - num
    console.log(`You have ${points} points`)
    return points
}

function tableRanking(playerList,points){
    let name = prompt("Please insert your name")
    if(name === null){
        name = "player " + parseInt(Math.random()*100)
    }
    playerList.push({name: name, points: points})
    playerList.sort((a, b) => b.points - a.points)
    console.table(playerList)
    console.log(`See you soon ${name}`)
}
