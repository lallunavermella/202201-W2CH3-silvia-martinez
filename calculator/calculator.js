function convertUserInputToArray(userInput) {
  const splitedInput = userInput.split(" ");
  return splitedInput;
}

function isNumber(inputText) {
  const isNumbers = !Number.isNaN(Number(inputText));
  return isNumbers;
}

function convertInputArrayToArrayNumbers(array) {
  return array.map((item) => parseFloat(item));
}

function calculateSquareRoot(arrayNumber) {
  let squareRoot = Math.sqrt(arrayNumber);
  if (!Number.isInteger(squareRoot)) {
    squareRoot = squareRoot.toFixed(3);
  }
  return squareRoot;
}

function mathsOperations(arrayNums) {
  let sumNum = parseFloat(arrayNums[0] + arrayNums[1], 10);

  let restNum = parseFloat(arrayNums[0] - arrayNums[1], 10);

  let multiplyNum = parseFloat(arrayNums[0] * arrayNums[1], 10);

  let divideNum = parseFloat(arrayNums[0] / arrayNums[1], 10);
  if (!Number.isInteger(sumNum)) {
    sumNum = parseFloat(sumNum.toFixed(3));
  }
  if (!Number.isInteger(restNum)) {
    restNum = parseFloat(restNum.toFixed(3));
  }
  if (!Number.isInteger(multiplyNum)) {
    multiplyNum = parseFloat(multiplyNum.toFixed(3));
  }
  if (!Number.isInteger(divideNum)) {
    divideNum = parseFloat(divideNum.toFixed(3));
  }

  return [sumNum, restNum, multiplyNum, divideNum];
}

function calculator() {
  const inputUser = Window.prompt(
    "Introduce un o dos parametros separados por una espacio"
  ).trim();
  const arrayToCheck = convertUserInputToArray(inputUser);
  let checkIsNumber;

  if (arrayToCheck.length > 2) {
    Window.alert(
      "Hay mas de dos elementos, no se pueden realizar las operaciones"
    );
    return;
  }

  if (arrayToCheck.length === 2) {
    checkIsNumber = isNumber(arrayToCheck[0]) && isNumber(arrayToCheck[1]);
  } else {
    checkIsNumber = isNumber(arrayToCheck[0]);
  }

  if (!checkIsNumber) {
    Window.alert(`"${inputUser}" NO es un numero`);
    return;
  }

  const arrayInputNumbers = convertInputArrayToArrayNumbers(arrayToCheck);
  const squareRoot = calculateSquareRoot(arrayInputNumbers);

  const arrayOperations = mathsOperations(arrayInputNumbers);

  if (arrayToCheck.length === 1) {
    console.log(
      `El resultado de la raiz cuadrada de ${arrayInputNumbers[0]} es: ${squareRoot}`
    );
  } else {
    console.log(`El resultado de la suma de ${arrayInputNumbers[0]} y ${arrayInputNumbers[1]} es: ${arrayOperations[0]} \n
    El resultado de la resta de ${arrayInputNumbers[0]} y ${arrayInputNumbers[1]} es :${arrayOperations[1]} \n
    El resultado de la multiplicacion de ${arrayInputNumbers[0]} y ${arrayInputNumbers[1]} es :${arrayOperations[2]} \n
    El resultado de la division de ${arrayInputNumbers[0]} y ${arrayInputNumbers[1]} es :${arrayOperations[3]} \n`);
  }
}
