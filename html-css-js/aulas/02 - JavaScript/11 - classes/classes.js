class Person{
    constructor(name, id){
        this._name = this.insereNumero(name)
        this._id = id
    }
    set name(newName){
        
        this._name = newName + ' passou pelo set'
    }
    get name(){
        return 'passou pelo get ' + this._name
    }
    insereNumero(x){
        return '0099' + x
    }
    funcao(){
        return 'RETORNO DE FUNCAO!'
    }
}

class Dev extends Person{
    constructor(name, codeLanguage){
        super(name, 123)
        this._codeLanguage = codeLanguage
    }
}

var person = new Person('pedro', 1)

console.log(person.funcao())
console.log(person.name)

person.name = 'josenildson'
console.log(person.name)

let developer = new Dev('Joaozao', 'pytahon')
// developer._id e _codeLanguage pois estao see referenciando diretamente ao atributo
// developer.name se referencia ao get!!!!!!
console.log(developer.name, developer._id, developer._codeLanguage)

let dev2 = new Dev('pedrao', 'c')
console.log(dev2.name, dev2._id, dev2._codeLanguage)