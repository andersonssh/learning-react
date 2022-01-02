var a = 1
var b = 2
const c = 3
let d = 4

console.log('Valor inicial de a: ', a)
console.log('Valor inicial de b: ', b)

// ATRIBUINDO VALOR DE D
d = 4
if (true){
    // ATRIBUINDO VALORES AS VARIAVEIS DO TIPO VAR
    // VAIRAVEIS PERMITEM ALTERACAO POIS POSSUEM ESCOPO GLOBAL
    a = 1
    b = 2
    // MUDANDO VALOR DA CONSTANTE
    // c = 1 NÃO PERMITIDO!!!
    // ATRIBUINDO VALOR A VARIAVEL DO TIPO LET  
    //d = 4  NAO PERMITIDO POIS A VAR SO EXISTE FORA DESTE ESCOPO
    var a = 11 // O ESCOPO E GLOBAL  
    let b = 22 // O ESCOPO E DO BLOCO IF
    let c = 33
    let d = 44

    console.log('Valor de a dentro do if: ', a) // 11
    console.log('Valor de b dentro do if: ', b) // 22
    console.log('Valor de c dentro do if: ', c) // 33
    console.log('Valor de d dentro do if: ', d) // 44
}

console.log('Valor de a fora do if: ', a) // 11
console.log('Valor de b fora do if: ', b) // 2
console.log('Valor de c fora do if: ', c) // 33
console.log('Valor de d fora do if: ', d) // 44