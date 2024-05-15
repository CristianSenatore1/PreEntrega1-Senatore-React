const Item = ({product}) => {
  return (
    <div>
        <img src={product.img} style={{width:"200px"}} />
        <p>{product.nombre}</p>
        <p>Precio : ${product.precio}</p>
    </div>
  )
}
//esta es la que cambia la estetica de la carta
export default Item