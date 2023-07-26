import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import Categoria from "./page/categoria/Categoria";
import  Norganicos  from "./page/categoria/Norganicos";

export default function Page() {
  return (
    <section>
      
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/categoria" exact component={Categoria} />
        <Route path="/norganicos" exact component={Norganicos} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
			</Switch>

    </section>
  );
}
