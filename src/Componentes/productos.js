import React, { useState, useEffect } from "react";

function Hooks(props) {
  const [contador, setCount] = useState(props.initialNumber);
  const [productos, setProductos] = useState([]);

  const handleClick = () => {
    setCount(contador + 1);
  };

  useEffect(() => {
    fetchApi();
  }, [contador]);

  const fetchApi = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
      });
  };

  return (
    <div class="container">
        <h1>PRODUCTOS</h1>
      <h2> {productos[contador]?.title} </h2>
      <h3> {productos[contador]?.description} </h3>
      <div class="imagenes">
        <img width="300px" src={productos[contador]?.images[0]} />
      </div>
      <h3> {productos[contador]?.price} € </h3>
      <div class="boton">
        {contador}
        <button onClick={handleClick}>Cambiar Producto!</button>
      </div>
    </div>
  );
}
export default Hooks;
