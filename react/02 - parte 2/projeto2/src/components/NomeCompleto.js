import {useState} from 'react'
import SeuNome from './SeuNome'
import SeuSobrenome from './SeuSobrenome'



function NomeCompleto(){
    const [name, setName] = useState()
    return (
        <div>
            <SeuNome sN={setName} />
            <SeuSobrenome sN={setName} />
            <h1>{name}</h1>
        </div>
    )
}

export default NomeCompleto