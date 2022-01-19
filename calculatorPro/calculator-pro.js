function calculatorPro() {
    do {
        calculator()
    } while (confirm('New numbers?'))
}

function calculator() {
    let inputUser;
    let arrayInputUser = [];

    do {
        inputUser = prompt('Enter a number or press cancel to stop.');
        if (!isNumber(inputUser)||inputUser === ""||inputUser===" ") {
            alert("Your imput is NOT a number");
        }else if(inputUser !== null){
            arrayInputUser.push(parseFloat(inputUser))            
        }
        
    } while (inputUser !== null)
    
    if(arrayInputUser.length === 1){
        console.log(`Your number is: ${arrayInputUser}`)
    }else if(arrayInputUser.length > 1){
        console.log(`Your numbers are: ${arrayInputUser}`)
    }
    
    if (arrayInputUser.length === 1) {
        let squareRoot = calculateSquareRoot(arrayInputUser)
        console.log(`The result of the squareroot is: ${squareRoot}`)
    } else if(arrayInputUser.length > 1){
        let arrayOperations = mathsOperations(arrayInputUser)
        console.log(`
        The result of the sum is: ${arrayOperations[0]} \n
        The result of the rest is :${arrayOperations[1]} \n
        The result of the product is :${arrayOperations[2]} \n
        The result of the division is :${arrayOperations[3]} \n`)
    }
}


function isNumber(inputText) {
    let isNumber = !isNaN(Number(inputText))
    return isNumber
}

function calculateSquareRoot(arrayNumber) {
    let squareRoot = Math.sqrt(arrayNumber)
    if (!Number.isInteger(squareRoot)) {
        squareRoot = squareRoot.toFixed(3)
    }
    return squareRoot
}

function mathsOperations(arrayNums) {
    let sumNum = 0
    let restNum = arrayNums[0]
    let multiplyNum = 1
    let divideNum = arrayNums[0]

    for (let i = 0; i < arrayNums.length; i++) {
        
        if(i > 0){
            restNum -= arrayNums[i];
            divideNum /= arrayNums[i];
        }
        sumNum += arrayNums[i];
        multiplyNum *= arrayNums[i];
        
    }  
 
    if (!Number.isInteger(sumNum)) {
        sumNum = sumNum.toFixed(3)
    }
    if (!Number.isInteger(restNum)) {
        restNum = restNum.toFixed(3)
    }
    if (!Number.isInteger(multiplyNum)) {
        multiplyNum = multiplyNum.toFixed(3)
    }
    if (!Number.isInteger(divideNum)) {
        divideNum = divideNum.toFixed(3)
    }
    return [sumNum, restNum, multiplyNum, divideNum]
}
