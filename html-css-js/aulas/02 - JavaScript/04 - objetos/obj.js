let dicionario = {
    nome: 'joao',
    idade: '20',
}

console.log(dicionario.nome)
console.log(dicionario['nome'])
console.log(typeof(dicionario))
console.log(Object.keys(dicionario), Object.values(dicionario))

dicionario.teste1 = '2'
dicionario['teste2'] = '22'
console.log(Object.keys(dicionario))