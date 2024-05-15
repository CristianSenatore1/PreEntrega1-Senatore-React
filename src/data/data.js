import json from "./data.json"


//obtener productos
const getProducts = () => {
    return new Promise ((resolve) => {
        // simular retraso
        setTimeout (()=>{
            resolve (json)
        }, 3000);             
    });
};

export default getProducts