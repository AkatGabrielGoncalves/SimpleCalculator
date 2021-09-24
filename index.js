const calculate = require('./calculate.js')

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escreva o primeiro número: ', (first) => {
  rl.question('Escreva o segundo número: ', (second) => {
    const results = calculate(Number(first), Number(second))
    Object.values(results).forEach((result) => {
      console.log(result)
    })
    process.exit()
  })
})

