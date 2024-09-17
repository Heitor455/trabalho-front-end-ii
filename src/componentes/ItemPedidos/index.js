import { Link } from 'react-router-dom'
import estilos from './Item.module.css'
import App from '../../App';

    function ItemPedidos(props) {
        return (
            <li>
                <Link to={`/item/${props.items.ip}`}>
                <img src='/' alt='Imagem Pizza'/>
                    <h1>{props.items.cliente}</h1>
                    <h1>{props.items.sabores}</h1>
                </Link>
            </li>
        )
    }

export default ItemPedidos;