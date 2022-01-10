// new Error(MENSAGEM, NOMEDOARQUIVO, NUMERODALINHA)


const MeuErro = new Error('Mensagem inválida')
MeuErro.name = 'Nome do erro!!!!'

console.log(MeuErro.name)
console.log(MeuErro.message)
throw MeuErro