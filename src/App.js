import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NaoEncontrada from './componentes/Paginas/NaoEncontrada';
import Pedidos from './componentes/Paginas/Pedidos';
import { useState } from 'react';
import Header from './componentes/Header';
import ListagemItens from './componentes/ListagemItens';
import Delecao from './componentes/Delecao';
import ItemPagePedidos from './componentes/Paginas/ItemPagePedidos';
import QuemSomos from './componentes/Paginas/QuemSomos';
import ItemPedidos from './componentes/ItemPedidos';

const App = () => {
  const [idPedido, setIdPedido] = useState(1);
  const [items, setItems] = useState([]);

  // Função para adicionar um novo item com um ID único
  const addItem = (newItem) => {
    // Adiciona o ID ao novo item
    const itemComId = { ...newItem, id: idPedido };

    // Atualiza o estado com o novo item
    setItems([...items, itemComId]);

    // Incrementa o ID para o próximo item
    setIdPedido(prevId => prevId + 1);

    console.log(items);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/QuemSomos" element={<QuemSomos />} />
          <Route path="/Pedidos" element={<Pedidos addItem={addItem} items={items}/>} />
          <Route path="*" element={<NaoEncontrada />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;