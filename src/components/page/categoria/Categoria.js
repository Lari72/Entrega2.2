import React from "react";
import { Link } from "react-router-dom";






const Categoria = () => {
  

    return (
      <div>
        
  
        <nav className="inicio">
        <Link to="/organicos">
         organicos <br></br>
        
        </Link>
        <Link to="/norganicos ">
         NO Organicos!
          
        </Link>
         
        </nav>
      </div>
    );
  };
  
  export default Categoria;
  