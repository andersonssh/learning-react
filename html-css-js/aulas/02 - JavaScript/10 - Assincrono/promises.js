// executar arquivo no terminal
const fs = require('fs')

console.log(1)

// apos a leitura do arquivo a funcao chama outra funcao e passa 2 parametros
// (erro, conteudo)
/*
fs.readFile('./a1.txt', (erro, conteudo) =>{
    fs.readFile('./a2.txt', (erro2, conteudo2) => {
        console.log(erro, String(conteudo))
        console.log(erro2, String(conteudo2))
    })
})*/

console.log('2')
console.log('3')

const lerArquivo = file => new Promise((resolve, reject) => {
    fs.readFile(file, (erro, conteudo) => {
        // existe erro?
        if (erro){
            console.log('erro encontrado', erro)
            reject(erro)
        }else{
            console.log('nenhum erro encontrado')
            resolve(conteudo)
        }
    })

})

lerArquivo('./a1.txt').then( conteudo => {
    console.log('Executando .then 1')
    console.log(String(conteudo))
    return lerArquivo('./a2.txt')
} ).then( (conteudo) => {
    console.log('Executando .then 2')

    console.log(String(conteudo))
    return lerArquivo('./a3.txt')
}).then( (conteudo) => {
    console.log('Executando .then 3')

    console.log(String(conteudo))
})
