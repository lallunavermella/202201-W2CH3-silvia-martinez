window.addEventListener("load", () => {
  const sum = document.getElementById("sum");
  const rest = document.getElementById("rest");
  const multiply = document.getElementById("multi");
  const division = document.getElementById("div");
  const equal = document.getElementById("equal");
  const coma = document.getElementById("coma");
  const clear = document.getElementById("clear");
  const allClear = document.getElementById("allClear");
  const number = document.querySelectorAll(".number");

  let panel;
  let result = "";
  let currentOperant = "";
  let value = "0";
  let click = true;
  let signComa = true;

  function operationMath(num1, num2, operator) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (operator === "+") {
      result = number1 + number2;
    } else if (operator === "-") {
      result = number1 - number2;
    } else if (operator === "X") {
      result = number1 * number2;
    } else if (operator === "/") {
      result = number1 / number2;
    }
    return String(result);
  }

  const changStyle = (operant) => {
    sum.style.border = sum.classList.remove("box-border-selected");
    rest.style.border = rest.classList.remove("box-border-selected");
    multiply.style.border = multiply.classList.remove("box-border-selected");
    division.style.border = division.classList.remove("box-border-selected");
    switch (operant) {
      case "+":
        sum.style.border = sum.classList.add("box-border-selected");
        break;
      case "-":
        rest.style.border = rest.classList.add("box-border-selected");
        break;
      case "X":
        multiply.style.border = multiply.classList.add("box-border-selected");
        break;
      case "/":
        division.style.border = division.classList.add("box-border-selected");
        break;
      default:
        break;
    }
  };

  panel.innerHTML = value;

  number.forEach((num) => {
    num.addEventListener("click", () => {
      if (value.length > 20) {
        return;
      }
      value += number.getAttribute("value");
      panel.innerHTML = value;
      click = true;
    });
  });
  const onOperantClicked = (operant) => {
    changStyle(operant);
    if (currentOperant) {
      result = operationMath(result, value, currentOperant);
    } else {
      result = value;
    }
    panel.innerHTML = result;
    currentOperant = operant;
    value = "";
    signComa = true;
  };

  sum.addEventListener("click", () => {
    if (click) {
      click = false;
      onOperantClicked("+");
    }
  });

  rest.addEventListener("click", () => {
    if (value === "") {
      value += "-";
    } else if (click) {
      click = false;
      onOperantClicked("-");
    }
  });

  multiply.addEventListener("click", () => {
    if (click) {
      click = false;
      onOperantClicked("X");
    }
  });

  division.addEventListener("click", () => {
    if (click) {
      click = false;
      onOperantClicked("/");
    }
  });

  allClear.addEventListener("click", () => {
    result = "0";
    currentOperant = "";
    value = "";
    click = true;
    signComa = true;
    panel.innerHTML = result;
  });

  clear.addEventListener("click", () => {
    value = value.slice(0, -1);
    if (value.length === 0) {
      value = "0";
    }
    panel.innerHTML = value;
  });

  coma.addEventListener("click", () => {
    if (signComa) {
      signComa = false;
      if (value === "") {
        value = 0;
      }
      if (result !== "") {
        value = 0;
      }
      value += ".";
      panel.innerHTML = value;
    }
  });

  equal.addEventListener("click", () => {
    if (!currentOperant) {
      return;
    }
    if (!value) {
      return;
    }
    changStyle();
    result = operationMath(result, value, currentOperant);
    click = true;
    signComa = true;
    panel.innerHTML = result;
  });
});
