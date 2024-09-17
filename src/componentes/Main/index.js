import estilos from "./Main.module.css"

function Main(props){
    console.log(estilos)

    return (
        <main>
            <div>
                {props.children}    
            </div>
        </main>
    )
}

export default Main