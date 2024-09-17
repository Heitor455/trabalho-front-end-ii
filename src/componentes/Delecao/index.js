function Delecao(props){
    console.log(props)

    return(
        <>
            <div>
                        <button>Deletar</button>
            </div>
        </>
    )
}

export default Delecao

/* <ul>{props.items.map((items, index) = (
                    <li key={index}>
                        <strong>
                            {item.titulo}
                        </strong> {item.descricao} - Autor(a): {item.autor}
                        <button onClick={() => props.deleteItem(index)}>Deletar</button>
                    </li>
                ))}</ul> */