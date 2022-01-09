const p1 = {
    nome: 'joaoao'
}

const p2 = {
    nome: 'pedrozao'
}

const p3 = {
    n: 'juju'
}
function pegaNome(){
    return this.nome
}

// call passa o objeto para a funcao como this
console.log(pegaNome.call(p2)) // pedrozao
console.log(pegaNome.call(p1)) // joaozao
console.log(pegaNome.call(p3)) // undefined

// call com parametros

const mobj = {
    num1: 100,
    num2: 100 
}

function soma(x, y){
    console.log( this.num1 + this.num2 + x + y)
}

soma(10, 5) // NaN

soma.call(mobj, 10, 5) // 215
// TOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// a diferenca de call para apply é que apply exige os parametros dentro de uma lista
soma.apply(mobj, [50, 10]) // 260
