import {useState} from 'react'
function Condicional(){
const [email, setEmail] = useState()
const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        console.log('Testandooo')
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(){
        setUserEmail('josafa')
    }
    var style = {
        color: 'white',
        padding: '10px',
        background: 'black'
    }

    return (
        <div>
            <h2>Cadastre o seu email (chefe)</h2>
            <form action="">
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail} type="submit">Enviar email</button>
            </form>
            { /**userEmail &&... cria o conteudo apos && caso userEmail seja true... 
             * no aso, basta ter conteudo para ser true! */ }
             {/**no caso atual, somente será true se o useEmail conter o valor 'chefe' */}
            {userEmail == 'chefe' && (
                <div>
                    <p>O e-mail do usuário é: {userEmail} </p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
            
            {userEmail == 'josafa' && (
                <div><p style={style}>Devido a um evento JS o userEmail agora é: {userEmail} </p></div>
            )}
        </div>
    )
}

export default Condicional