let nome = 'joao'

let sobrenome = "souza"

console.log(`Olá ${nome} ${sobrenome}!`)

console.log(`Olá ${nome.concat(sobrenome)}`) // Olá joaosouza

typeof(sobrenome)

let sobrenome2 = new String('souza')
console.log(sobrenome)
console.log(sobrenome2) // USAR NO CONSOLE DO GOOGLE PARA VER TODAS AS PROPRIEDADES
console.log(sobrenome[1])
console.log(sobrenome[1])

let frase = "Olá, tudo bem?"

// verifica se a variavel possui a palavra tudo
console.log(frase.includes('tudo')) // true
console.log(frase.includes('Olá')) // true
console.log(frase.startsWith('Ol')) // true
console.log(frase.endsWith('m?')) // true

let numero = 1
let a = numero.toString()

console.log(typeof(a)) // string
console.log(typeof(numero)) // numero

let boleano = false
let bo = boleano.toString()
console.log(boleano, typeof(boleano)) // boolean
console.log(bo, typeof(bo)) // string
