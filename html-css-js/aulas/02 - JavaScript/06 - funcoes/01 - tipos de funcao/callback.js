// funcoes passadas como parametros para outras funcoes
let calcular = function(operacao, x, y){
    console.log('executando calcular')
    return operacao(x, y)
}

let multiplicacao = function(x, y){
    console.log('executando multiplicacao')
    return x * y
}

let soma = function(a, b){
    console.log('executando soma')
    return a + b
}

let resMultiplicacao = calcular(multiplicacao, 3, 3)

let resSoma = calcular(soma, 3, 3)

console.log('Iniciando a solicitacao das respostas para 3 e 3')
console.log('solicitando resMultiplicacao')
console.log('resultado da multiplicacao: ', resMultiplicacao)
console.log('solicitando resSoma')
console.log('resultado da soma:', resSoma)