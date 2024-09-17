import Header from "../../Header"
import Main from "../../Main"
import estilos from "./NaoEncontrada.module.css"

function NaoEncontrada() {
    return ( 
        <>
        <Header />
        <Main>
            <h1 className={estilos["h1"]}>Página não encontrada!</h1>
        </Main>
        </>
    )
}

export default NaoEncontrada