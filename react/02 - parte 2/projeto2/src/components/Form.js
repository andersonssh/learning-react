function Form(){
    function cadastrarUsuario(e){
        // para html no envio de requisicao pro server e passa o comando para o corpo desta funcao
        e.preventDefault()
        console.log('script para cadastro de usuario')
    }
    return (  
        <div>
            <h1>Cadastro</h1>
            <form action="" onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form