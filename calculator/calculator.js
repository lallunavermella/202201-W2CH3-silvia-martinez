function calculator() {
  const inputUser = prompt('Introduce un o dos parametros separados por una espacio').trim()
  let arrayToCheck = convertUserInputToArray(inputUser)
  let checkIsNumber

  if(arrayToCheck.length > 2){
    alert("Hay mas de dos elementos, no se pueden realizar las operaciones");
    return
  }

  if (arrayToCheck.length === 2) {
    checkIsNumber = isNumber(arrayToCheck[0]) && isNumber(arrayToCheck[1])
  } else {
    checkIsNumber = isNumber(arrayToCheck[0])
  }

  if (!checkIsNumber) {
    alert(`"${inputUser}" NO es un numero`);
    return
  }

  let arrayInputNumbers = convertInputArrayToArrayNumbers(arrayToCheck)
  let squareRoot = calculateSquareRoot(arrayInputNumbers)

  let arrayOperations = mathsOperations(arrayInputNumbers)

  if (arrayToCheck.length === 1) {
    console.log(`El resultado de la raiz cuadrada de ${arrayInputNumbers[0]} es: ${squareRoot}`)
  } else {
    console.log(`El resultado de la suma de ${arrayInputNumbers[0]} y ${arrayInputNumbers[1]} es: ${arrayOperations[0]} \n
    El resultado de la resta de ${arrayInputNumbers[0]} y ${arrayInputNumbers[1]} es :${arrayOperations[1]} \n
    El resultado de la multiplicacion de ${arrayInputNumbers[0]} y ${arrayInputNumbers[1]} es :${arrayOperations[2]} \n
    El resultado de la division de ${arrayInputNumbers[0]} y ${arrayInputNumbers[1]} es :${arrayOperations[3]} \n`)
  }
}

function convertUserInputToArray(userInput) {
  return splitedInput = userInput.split(' ');
}

function isNumber(inputText) {
  let isNumber = !isNaN(Number(inputText))
  return isNumber
}

function convertInputArrayToArrayNumbers(array) {
  return array.map((item) => parseFloat(item))
}

function calculateSquareRoot(arrayNumber) {
  let squareRoot = Math.sqrt(arrayNumber)
  if (!Number.isInteger(squareRoot)) {
    squareRoot = squareRoot.toFixed(3)
  }
  return squareRoot
}

function mathsOperations(arrayNums) {
  let sumNum = arrayNums[0] + arrayNums[1]
  let restNum = arrayNums[0] - arrayNums[1]
  let multiplyNum = arrayNums[0] * arrayNums[1]
  let divideNum = arrayNums[0] / arrayNums[1]
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

