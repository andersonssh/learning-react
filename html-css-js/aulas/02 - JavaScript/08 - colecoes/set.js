const teste = [1,1,2,2,3,4,5,6,7,2,1,3,4]

const sett = new Set(teste)

console.log(sett)

// set é uma estrutura que permite apenas valores unicos

sett.add(9) // adiciona
sett.has(5) // verifica se existe
sett.delete(5) // deleta valor

// length em set's é size