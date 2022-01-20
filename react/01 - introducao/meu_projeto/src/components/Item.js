import PropTypes from 'prop-types'
function Item({marca, lancamento}){

    return (
        <li>{marca} - {lancamento}</li>
    )
}
// campo requerido. Campo de tipo especifico
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number
}
// valores padrao caso o campo não tenha sido definido
Item.defaultProps = {
    marca: "Você nao colocou uma marca",
    lancamento: 0
}
export default Item