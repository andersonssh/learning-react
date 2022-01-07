if (true){
    console.log('true - com chave')
}
let x = false
if (x) console.log('true - sem chaves')
else console.log('falso - sem chaves')

switch(x){
    case true:
        console.log('T')
    default:
       console.log('X')
}
console.log('for')
for (let i = 0; i < 10; i++) console.log('x')

let y = [1, 2, 3, 4, 5, 6]

console.log('for IN')
// for IN transforma a variavel criada antes do in
// no indice correspondente a cada posicao em y
for(zz in y) {
    // console.log(y[zz]) modo correto para acessar cada dado
    console.log(zz)
}  
console.log('for OF')
for(zz of y) console.log(zz)

let i = 0

console.log('DO while')
console.log('com chaves')
do {
    console.log(i++)
} while(i < 5)

console.log('sem chaves')
do console.log(i++)
while(i < 10)

console.log('while')
while(i < 15) console.log(i++)