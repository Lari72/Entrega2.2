import React, {useContext} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">PRODUCTOS</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItem 
									key={producto.id}
									title={producto.nombre}
									image={producto.imagen}
									category={producto.categoria}
									price={producto.precio}
									id={producto.id}
								/>
							))
						}					
        </div>
				</>
    )
}
