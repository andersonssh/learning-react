console.log('INICIEI O APP')
function resolverDepoisDe2Segundos(x){
    return new Promise(resol => {
        setTimeout(() => {
            console.log('resolvendo')
            resol(x)
        }, 2000);
    })
}

async function adicionar1(x){
    var a = resolverDepoisDe2Segundos(20)
    var b = resolverDepoisDe2Segundos(30)
    var c = resolverDepoisDe2Segundos(30)
    var d = resolverDepoisDe2Segundos(30)
    var e = resolverDepoisDe2Segundos(30)
    return x + await a + await b + await c + await d + await e
}

adicionar1(10).then(v => {
    console.log('executando pós adicionar1')
    console.log(v)
})

async function adicionar2(x){
    var a = await resolverDepoisDe2Segundos(20)
    var b = await resolverDepoisDe2Segundos(30)
    var c = await resolverDepoisDe2Segundos(20)
    return x + a + b + c
}

adicionar2(10).then( v =>{
    console.log('executando pós adicionar2')
    console.log(v)
})