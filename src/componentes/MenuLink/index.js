import { Link, useLocation } from "react-router-dom"
import estilos from "../Header/Header.module.css"

function MenuLink(props) {


    const localizacao = useLocation()


    return (
        <li>
            <Link to={props.to} 
                className={`${estilos.link} ${localizacao.pathname === props.to ? estilos.linkAtivo : ''}`}>
                    {props.children}
            </Link>
        </li>
    )
}

export default MenuLink