import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl] = useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() => {
    console.log('re render', params.id)
    item = 0;
    productos.forEach(producto => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto)
        setUrl(0)
      }
    })
  }, [params.id, productos])

  console.log(url)

  useEffect(() => {
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values)
  }, [url, params.id])

  const handleInput = (e) => {
    const number = e.target.value.toString().padStart(2, '01')
    setUrl(number)
  }

  if (detalle.length < 1) return null;

  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.nombre}</h2>
          <p className="price">${detalle.precio}</p>
          <div className="grid">
            
          </div>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>

          {
            url ? <img src={images} alt={detalle.nombre} /> : <img src={detalle.imagen} alt={detalle.nombre} />
          }
          <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
          <div className="description">
          <h2>{detalle.descripcion}</h2>
          </div>

        </div>

      }
      
      
    
    </>
  )
}
