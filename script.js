const numbers = document.querySelectorAll('.number')
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (n) => {
    if (currentNumber === '0') {
        currentNumber = n
    } else {
        currentNumber += n
    }
}

numbers.forEach(n => {
    n.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
        // console.log(typeof (event.target.value))
    })


})

const inputOperator = (o) => {
    prevNumber = currentNumber
    calculationOperator = o
    currentNumber = '0'
}

const operators = document.querySelectorAll('.operator')
operators.forEach(o => {
    o.addEventListener('click', (event) => {
        // console.log(calculationOperator)
        if (calculationOperator != "") return
        inputOperator(event.target.value)
        updateScreen(event.target.value)
    })
})


const inputDecimal = (d) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += d

}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})


const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseInt(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', (event) => {
    calculate()
    updateScreen(currentNumber)
})

const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', (event) => {
    updateScreen(parseFloat(currentNumber) / 100)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})