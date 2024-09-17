import ItemPagePedidos from "../Paginas/ItemPagePedidos";
import estilos from "./ListagemItens.module.css"

function ListagemItens({ dados, tipo }) {
    return (
        <>
            <div className={estilos.carrousel}>
                <ul>
                    {dados.map(item => {
                       if (tipo === 'pedidos') {
                            return <ItemPagePedidos key={item.id} dados={item} />;
                        } else {
                            return <p>Não foi possivel realizar a listagem!</p>;
                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export default ListagemItens

