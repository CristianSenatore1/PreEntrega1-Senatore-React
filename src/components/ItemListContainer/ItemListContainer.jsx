import { useEffect, useState } from "react";
import "./itemListContainer.css";
import ItemList from "./ItemList";
import getProducts from "../../data/data";

const ItemListContainer = ({saludo}) => {
    const [ products, setProducts ] = useState ([])
    
    useEffect(() =>{
        getProducts()
        .then( (respuesta) =>{
            setProducts(respuesta)
        } )
        .catch((error) =>{
            console.log(error);
        })
        .finally(()=>{
            console.log("Finalizo la promesa");
        })
    }, [])
    

    return (
        <div className="item-list-container">
            <p>{saludo}</p>
            <ItemList products ={products} />
        </div>
    );
};

export default ItemListContainer