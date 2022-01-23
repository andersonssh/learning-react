// passagem de eventos por props
function Button(props){
    {/** o componente atual e o componente pai agora podem executar a mesma funcao pois o comp. 
    enviou o evento via funcao podendo ser acessado pelo props */}
    return <button onClick={props.event} >{props.text}</button>
}

export default Button