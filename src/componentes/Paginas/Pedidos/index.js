import { useState } from "react";
import Header from "../../Header"
import Main from "../../Main"
import estilos from "./Pedidos.module.css"
import ListagemItens from "../../ListagemItens";


function Pedidos(props) {
    const [cliente, setCliente] = useState('');
    const [sabores, setSabores] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const pedido = { cliente, sabores};
        props.addItem(pedido);
        setCliente('');
        setSabores('');
    }

    return ( 
        <>
        <Header />
        <Main>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Cliente:</label><br />
                        <input type="text" value={cliente} onChange={
                            (e) => {
                                setCliente(e.target.value)
                            }
                        } />
                    </div>

                    <div>
                        <label>Sabores:</label><br />
                        <input type="text" value={sabores} onChange={
                            (e) => {
                                setSabores(e.target.value)
                            }
                        } />
                    </div>
                    <button type="submit">Confirmar Pedido</button>
                </form>         
                <ListagemItens dados={props.items} tipo="pedidos"/>
            </div>
        
        </Main> 
        </>
    )
}

export default Pedidos