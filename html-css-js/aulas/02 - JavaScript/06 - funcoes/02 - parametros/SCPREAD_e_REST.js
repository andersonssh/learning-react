// transformar array em valores independdentes
// semelhante a receber com *args e mostrar args

function teste(x, y, z){
    console.log('recebido 3 valores. \nx:', x, 'y:', y, 'z:', z)
}

let numeros = [5,6,7]

teste(...numeros)
/// ... e o array envia os dados separadamente
// semelhante a args
console.log(...numeros)
// REST

// o que era parte de um array agora e um objeto independente

function teste2(...transformaEmArray){
    console.log(transformaEmArray)
    console.log('Mostrando como foi recebido: ', ...transformaEmArray)
}
teste2(2,3,4,5,7,88)

// o mesmo se dá ao contrario. se varios argumentos forem passados, se tornaram um array