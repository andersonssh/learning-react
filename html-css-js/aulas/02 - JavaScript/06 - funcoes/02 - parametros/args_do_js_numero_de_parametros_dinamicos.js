// arguments do js é o mesmo que o *args no python
// quantidade de parametros infinitos ou nulos
function teste(){
    for(var i = 0; i < arguments.length; i++){
        // objeto arguments recebe varios parametros e coloca em um array
        console.log(arguments[i])
    }
    console.log(arguments)

}
teste(11,22,33,44,55,66,77,88,99)

let max = -Infinity
console.log(max)

function teste2(i){
    console.log('valor do parametro obrigatorio: ', i)
    for(var x = 0; x < arguments.length; x++){
        // objeto arguments recebe varios parametros e coloca em um array
        console.log(arguments[x])
    }
    console.log(arguments)
}
// mesmo tendo um parametro "obrigatorio", a variavel argumentos ainda armazena o valor passado
teste2(11,22,33,44,55,66)