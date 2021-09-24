const calculate = (first = 0, second = 0) => {
  return {
    soma: `Soma: ${first+second}`,
    sub:`Subtração: ${first-second}`,
    mult:`Multiplicação: ${first*second}`,
    div:`Divisão: ${first/second}`
  }
}

module.exports = calculate