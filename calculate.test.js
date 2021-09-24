const calculate = require('./calculate.js')

test('calculate numbers, 18 and 8', () => {
  console.log(calculate(18,8))
  expect(calculate(18,8)).toStrictEqual({
    soma: `Soma: 26`,
    sub:`Subtração: 10`,
    mult:`Multiplicação: 144`,
    div:`Divisão: 2.25`
  })
})