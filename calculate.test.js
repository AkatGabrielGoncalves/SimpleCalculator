const calculate = require('./calculate.js')

test('calculate numbers, 18 and 8', () => {
  expect(calculate(18,8)).toStrictEqual({
    soma: `Soma: 26`,
    sub:`Subtração: 10`,
    mult:`Multiplicação: 144`,
    div:`Divisão: 2.25`
  })
})

test('calculate strings, 18 and 8', () => {
  expect(calculate('18','8')).toStrictEqual({
    soma: `Soma: 26`,
    sub:`Subtração: 10`,
    mult:`Multiplicação: 144`,
    div:`Divisão: 2.25`
  })
})

test('No arguments', () => {
  expect(calculate('','')).toStrictEqual({
    soma: `Soma: 0`,
    sub:`Subtração: 0`,
    mult:`Multiplicação: 0`,
    div:`Divisão: NaN`
  })
})

test('try to calculate with strings', () => {
  expect(calculate('fewds','dffefq')).toStrictEqual({
    soma: `Soma: NaN`,
    sub:`Subtração: NaN`,
    mult:`Multiplicação: NaN`,
    div:`Divisão: NaN`
  })
})


