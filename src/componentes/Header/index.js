import { Link } from "react-router-dom"
import estilos from "./Header.module.css"

function Header() {
    console.log(estilos)

    return (
        <header className={estilos["header-background"]}>           
            <Link to="/"><img src="/images/pizza-logo.png" className={estilos["header-logo"]}></img></Link>

            <div className={estilos["header-links"]}>
                <Link to="/QuemSomos">Quem Somos</Link>
                <Link to="/Pedidos">Pedidos</Link>
            </div>
        </header>
    )
}

export default Header