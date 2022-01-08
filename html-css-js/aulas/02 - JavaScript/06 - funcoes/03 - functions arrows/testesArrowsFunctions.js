var a
a = () => {
    return 'retorno padrao'
}
// a funcao acima é equivalente a funcao abaixo
a = () => 'retorno padrao'
console.log(a)

a = (p1, p2) => `retorno -> ${p1} ${p2}` 
console.log(a('teste p1', 'teste p2'))

a = p1 => `func:${p1}`
console.log(a('teste de parametro 1 sem parenteses'))