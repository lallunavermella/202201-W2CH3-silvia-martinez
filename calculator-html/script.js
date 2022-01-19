window.addEventListener('load', () => {

    const sum = document.getElementById('sum')
    const rest = document.getElementById('rest')
    const multiply = document.getElementById('multi')
    const division = document.getElementById('div')
    const equal = document.getElementById('equal')
    const coma = document.getElementById('coma')
    const clear = document.getElementById('clear')
    const allClear = document.getElementById('allClear')
    const number = document.querySelectorAll('.number');

    let result = "";
    let currentOperant = ""; //assignarem l'operador en cada cas
    let value = "0"
    let click = true //Flag, per a que es pugui continuar operant si fem mes d'un click als operands. (si no surt NaN)
    let signComa = true //Flag, per a que no es pugui posar mes d'una coma

    panel.innerHTML = value

    number.forEach(number => {
        number.addEventListener('click', () => {
            if (value.length > 20) {
                return
            } 
            value += number.getAttribute('value');
            panel.innerHTML = value;
            click = true
        })
    });

    sum.addEventListener('click', function () {
        if (click) {
            click = false
            onOperantClicked("+")
        }
    })

    rest.addEventListener('click', function () {
        if (value === "") {
            value += "-"
        } else if (click) {
            click = false
            onOperantClicked("-")
        }
    })

    multiply.addEventListener('click', function () {
        if (click) {
            click = false
            onOperantClicked("X")
        }
    })

    division.addEventListener('click', function () {
        if (click) {
            click = false
            onOperantClicked("/")
        }
    })

    allClear.addEventListener('click', function () { //borra tot i reinicia les funcions
        result = "0";
        currentOperant = "";
        value = ""
        click = true
        signComa = true
        panel.innerHTML = result;
    });

    clear.addEventListener('click', function () {
        value = value.slice(0, -1);
        if (value.length === 0) {
            value = "0"
        }
        panel.innerHTML = value;
    });

    coma.addEventListener('click', function () {
        if (signComa) {
            signComa = false;
            if (value === "") {
                value = 0
            }
            if (result !== "") {
                value = 0
            }
            value += '.'
            panel.innerHTML = value;
        }
    });

    equal.addEventListener('click', function () {
        if (!currentOperant) {
            return
        }
        if (!value) {
            return
        }
        changStyle()
        result = operationMath(result, value, currentOperant)
        click = true
        signComa = true
        panel.innerHTML = result;
    });

    //funcio que determina l'operacio a realitzar
    let onOperantClicked = (operant) => {
        changStyle(operant)
        if (currentOperant) {
            result = operationMath(result, value, currentOperant)
        } else {
            result = value
        }
        panel.innerHTML = result
        currentOperant = operant
        value = ""
        signComa = true;
    }

    //funcio per a canviar l'estil dels operants, per saber quin s'esta utilitzant
    let changStyle = (operant) => {
        sum.style.border = sum.classList.remove('box-border-selected');
        rest.style.border = rest.classList.remove('box-border-selected');
        multiply.style.border = multiply.classList.remove('box-border-selected');
        division.style.border = division.classList.remove('box-border-selected');
        switch (operant) {
            case "+":
                sum.style.border = sum.classList.add('box-border-selected');
                break;
            case "-":
                rest.style.border = rest.classList.add('box-border-selected');
                break;
            case "X":
                multiply.style.border = multiply.classList.add('box-border-selected');
                break;
            case "/":
                division.style.border = division.classList.add('box-border-selected');
                break;
            default:
                break;
        }
    }
});

//funcio basica per a que la calculadora funcioni
function operationMath(num1, num2, operator) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (operator === '+') {
        result = num1 + num2
    } else if (operator === '-') {
        result = num1 - num2
    } else if (operator === 'X') {
        result = num1 * num2
    } else if (operator === '/') {
        result = num1 / num2
    }
    return String(result)
}
