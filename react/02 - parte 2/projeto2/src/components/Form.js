import { useState } from 'react'

function Form(){
    function cadastrarUsuario(e){
        // para html no envio de requisicao pro server e passa o comando para o corpo desta funcao
        e.preventDefault()
        console.log(name, password)
        console.log('script para cadastro de usuario')
    }

    const [name, setName] = useState('Nome padrao')
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro</h1>
            <form action="" onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"></label>
                    <input onChange={ (e) => setName(e.target.value) } value={name} name="name" type="text" placeholder="digite seu nome" />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="digite a sua senha" />
                </div>
                <div>
                    
                    <input type="submit" name="password" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form