function retornaNomes(){
    return this.nome
}

// bind clona a funcao e passsa o dicionario para this
let p1 = retornaNomes.bind({nome: 'BRUNOOW'}) // bind injeta o dicionario passado como parametro para a funcao... sendo this!

console.log(p1()) // p1 agora é uma funcao pois o bind clona a funcao original para a variavel
