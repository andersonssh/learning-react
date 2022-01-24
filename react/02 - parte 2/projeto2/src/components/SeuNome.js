function SeuNome({sN}){
    return (
        <div>
            <p>Digite seu Nome:</p>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => sN(e.target.value)}/>
        </div>
    )
}


export default SeuNome