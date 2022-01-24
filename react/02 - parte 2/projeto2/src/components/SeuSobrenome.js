function SeuSobrenome({sN}){
    return (
        <div>
            <p>Seu Sobrenome:</p>
            <input type="text" placeholder="Digite seu sobrenome" onChange={(e) => sN(e.target.value)}/>
        </div>
    )
}

export default SeuSobrenome