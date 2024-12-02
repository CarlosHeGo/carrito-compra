import React, { useState, useEffect} from 'react'
import Productos from './Productos'
import './App.css'
import cartimage from './cart.svg'

function App() {
  
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart([...cart, producto]);
  };

  const toggleCart = () => {
    if (cart.length === 0) {
      alert("Carrito vacío");
    } else {
      const productsOnCart = cart.map((producto) => `${producto.nombre} - ${producto.precio} €`).join("\n");
      alert(`Productos añadidos:\n${productsOnCart}`);
    }
    
  };

  return (
    <>
      <img src={cartimage} width={34} onClick={toggleCart} alt="Ver carrito" />
      <h1>Productos navideños</h1>
      <Productos addToCart={addToCart}></Productos>
    </>
    
  )
}

export default App