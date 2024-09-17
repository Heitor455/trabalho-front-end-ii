import { Link, useParams } from 'react-router-dom'

function ItemPagePedidos(props) {

    const parametros = useParams()

    const item = props.items.find((elemento) => ( elemento.id === Number(parametros.id)) )

    return (                
        <div>             
                <div>
                    <h1> {items.sabores} </h1>
                    <p>
                          {items.cliente}
                    </p>   
                    <h1>(27) 9631-5487</h1>                   
                </div>
        </div>        
    )
}

export default ItemPagePedidos