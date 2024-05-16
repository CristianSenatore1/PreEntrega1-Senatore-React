const ItemDetail = ({product}) => {
  return (
    <div style={{ display: "flex" }}>
      <img style={{ width: "400px" }} src={product.img} />
      <div>
        <p>nombre : {product.nombre}</p>
        <p>Precio : {product.precio}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
