import ItemCount from "../ItemCount/ItemCount";
import "../ItemCount/itemCount.css";

const ItemDetail = ({product}) => {
  return (
    <div className= "item-detail" /*style={{ display: "flex" }}*/>
      <div className="image-detail">
        <img src={product.img} />

      </div>

      <div className="content-detail">
        <p className="name-detail">{product.nombre}</p>
        <p className="text-detail">Precio : ${product.precio}</p>
        <ItemCount stock={product.stock}/>
      </div>
    </div>
  );
};

export default ItemDetail;
