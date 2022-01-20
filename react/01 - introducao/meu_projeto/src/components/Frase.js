import styles from './Frase.module.css'

function Frase(){
    console.log(styles)
    return (
        <div className={styles.teste}>
            <p>P do componente FRASE</p>
        </div>
    )
}


export default Frase