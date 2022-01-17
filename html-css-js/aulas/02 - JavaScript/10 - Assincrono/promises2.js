const fs = require('fs')
const lerArquivo = file => new Promise((resolve, reject) => {
    fs.readFile(file, (erro, conteudo) => {
        // CRITERIO PARA REJEITAR OU RESOLVER
        console.log(erro)
        if (erro){
            // REJEITANDO A TAREFA
            console.log('(funcao antes de rejeitar)')
            reject(erro)
        }else{
            // RESOLVENDO A TAREFA
            console.log('(funcao antes de resolver)')
            resolve(conteudo)
        }
    })

})

// exemplo de funcoes executando em cadeia
const teste = lerArquivo('./a1.txt').then( conteudo => {
    console.log('ESTA FUNCAO EXECUTA SOMENTE QUANDO TERMINAR DE EXECUTAR A FUNCAO DA PROMISSE')
    return lerArquivo('./a2.txt')
} ).then( (conteudo) => {
    console.log('ESTA FUNCAO SO EXECUTA QUANDO A FUNCAO ANTERIOR TERMINAR')
})

setTimeout(() => {
    console.log(teste)
}, 1000);


function resolvendo(){
    return new Promise((res, rej) => {
        res('resolvido')
    })
}
function rejeitando(){
    return new Promise((res, rej) => {
        rej('rejeitado')
    })
}

rejeitando()
    .catch((valorDoRetorno) => {
        console.log('entrando em funcao caso rejeitado')
        console.log(valorDoRetorno)
    })
    .then((valorDoRetorno =>{
        console.log('entrando em funcao caso resolvido')
        console.log(valorDoRetorno)
}))