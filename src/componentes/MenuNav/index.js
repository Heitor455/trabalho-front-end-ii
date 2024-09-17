import { useLocation } from "react-router-dom"
import MenuLink from "../MenuLink"
import estilos from "../Header/Header.module.css"


function MenuNav() {

    const localizacao = useLocation()
    console.log('localizacao', localizacao)

       
    return (
        <nav className={estilos.navegacao}>
            <ul>
                <MenuLink to="/Sabores"> Sabores </MenuLink>
                <MenuLink to="/Pedidos"> Pedidos </MenuLink>            
            </ul>
        </nav> 
    )
}

export default MenuNav