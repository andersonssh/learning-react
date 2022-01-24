function Listas({itens, lista}){
    console.log(itens)
    itens.map((item)=>{
        console.log(item)
    })
    return (
        <>
            <h2>Lista de usuarios:</h2>
            {/** Como o retorno é em JSX envez de {}, é usado ()*/}
            {   
                itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <div>Lista vazia</div>
                )
            }
            {
                lista.map(item => (
                    <p>{item.nome} tem {item.idade} anos.</p>
                    
                ))
            }
        </>
    )
}

export default Listas