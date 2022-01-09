let pessoa = {
    id: 1,
    primeiroNome: 'Joao',
    ultimoNome: 'Henrique',
    nomeCompleto: this.primeiroNome + ' ' + this.ultimoNome,
    getId: function (){
        this.id = 5 // linha altera o valor da variavel globalmente
        return this.id
    }
}

console.log(pessoa.nomeCompleto) // undefined e undefined
console.log(pessoa.getId()) // 1 - a funcao pode receber um contexto para acessar com this
console.log(pessoa.id)

console.log(this)