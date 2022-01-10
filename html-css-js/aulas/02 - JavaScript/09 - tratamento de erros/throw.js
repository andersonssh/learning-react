function verificaPalindromo(string){
    if (!string) throw 'String inválida' // retorna a mensagem de erro no interpretador
    return string === string.split('').reverse().join('')
}

console.log(verificaPalindromo(''))