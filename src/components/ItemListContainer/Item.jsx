import { useState } from "react";
import { Link } from "react-router-dom";
import "./Item.css"; 

const Item = ({ product }) => {
  const [expandir, setExpandir] = useState(false);

  const handleMouseOver = () => {
    setExpandir(true);
  };

  const handleMouseLeave = () => {
    setExpandir(false);
  };

  return (
    <div
      className= {`item ${expandir ? "expand" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img className="image-item" src={product.img} alt={product.nombre} />
      <div className="content-item">
        <p>{product.nombre}</p>
        <p>Precio: ${product.precio}</p>
        <Link to={`/detail/${product.id}`} className="button-item">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
