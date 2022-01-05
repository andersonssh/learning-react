// entre {}, é possivel filtrar apenas os dados que interessam em um obetjeto

function teste ({id}){
    console.log(arguments)
    console.log(id)
    // pega apenas o um par chave-valor de um dicionario que foi passado
}

let usuario = {
    id: 1,
    nome: 'evandro',
    apelido:'loko'
}
let usuario2 = {
    nome: 'evandro',
    apelido:'loko'
}

teste(usuario)
// como nao foi passado um id em usuario2, quando a funcao acessa, ele retorna indefinido
teste(usuario2)

// teste com filtros em dicionario
const userTest = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'wilsu'
    }
}

function testeFiltragemAvancada({fullName:{firstName: primeiro, lastName: sobrenome}}){
    console.log(primeiro)
    console.log(sobrenome)
}

testeFiltragemAvancada(userTest)