import Item from "./Item"

function List(){
    return (
        // quando a tag é omitida ele entrega sem ela!
        // sempre que uma tag é omitida ele entrega o elemento como se ela não existisse

        <>
            <h1>Minha Lista</h1>
            <>
                <>teste</>
            </>
            <ul>
                <Item marca="reno" lancamento={1999}/>    
                <Item marca="juvenal" lancamento={1974}/>    
                <Item lancamento={1}/>    
                <Item />
            </ul>
        </>
    )
}

export default List