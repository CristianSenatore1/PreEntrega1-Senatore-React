import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/data";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";


const ItemListContainer = ({saludo}) => {
    const [ products, setProducts ] = useState ([]);
    const { idCategory } = useParams( )

    // loading
    const [loading,setLoading] = useState(false)
    
    useEffect(() =>{
        setLoading(true)
        getProducts()
        .then( (respuesta) =>{
            if(idCategory){
                //filtramos por categoria que almacena idCategory
                const productsFilter = respuesta.filter( (productRes) => productRes.category === idCategory)
                setProducts(productsFilter)
            }else{
                //al no existir categoria guardamos todos los productos
                setProducts(respuesta)
            }
        } )
        .catch((error) =>{
            console.log(error);
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [idCategory])
    
    return (
        <div className="item-list-container">
            <p>{saludo}</p>
            {
                loading ? <div>Estamos actualizando la informacion...</div> : <ItemList products={products}/>
            }
            <ItemList products ={products} />
        </div>
    );
};

export default ItemListContainer