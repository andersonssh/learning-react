import Button from './Button.js'

function Evento({numero}){
    function meuEvento(){
        console.log(`Ativacao realizada! ${numero}`)
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            {/**Passando a funcao para o componente Button */}
            <Button event={meuEvento} text="Primeiro evento" />
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento