const calculate = (first = 0, second = 0) => {
  const firstNumber = Number(first)
  const secondNumber = Number(second)
  return {
    soma: `Soma: ${firstNumber+secondNumber}`,
    sub:`Subtração: ${firstNumber-secondNumber}`,
    mult:`Multiplicação: ${firstNumber*secondNumber}`,
    div:`Divisão: ${firstNumber/secondNumber}`
  }
}

module.exports = calculate