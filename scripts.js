let numberOne = prompt(`Operações matemáticas:

Digite o primeiro números.
`)
let NumberTwo = prompt(`Digite o segundo número.`)

numberOne = Number(numberOne)
NumberTwo = Number(NumberTwo)

let sum = numberOne + NumberTwo
let sub = numberOne - NumberTwo
let mult = numberOne * NumberTwo
let div = numberOne / NumberTwo
let rem = numberOne % NumberTwo

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mult}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${rem}`)

if (sum % 2 == 0) {
  alert(`O resultado da soma é par`)
} else {
  alert(`O resultado da soma é impar`)
}

if (numberOne - NumberTwo == 0) {
  alert(`Os números são iguais`)
} else {
  alert(`Os números são diferentes`)
}
