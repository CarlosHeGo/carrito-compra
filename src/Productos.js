import React, { useEffect, useState } from 'react'
import './Productos.css'


function Productos({addToCart}) {
  
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    const response = await fetch("./articulos_navidenos.json");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const HTMLproducts = products.map((product) => {
    return (
        <div key={product.id}>
            <h3>{product.id}: {product.nombre} - {product.precio} € 
                <button onClick={() => addToCart(product)}>Añadir</button>
            </h3>
            <p>{product.descripcion}</p>
        </div>
    )
  });

  return (
    <div>{HTMLproducts}</div>
  )
};


export default Productos