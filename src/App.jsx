import "./App.css"; 
import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import FormularioContacto from "./components/Contacto/FormularioContacto";
function App() {

  


  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={ <ItemListContainer saludo = "Te presentamos nuestros vehículos y servicios en conjunto. ¡Te deseamos una agradable visita!"/> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer saludo = "Te presentamos nuestros vehículos 0KMS!!"/> }/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
        <Route path="/contacto" element={<FormularioContacto/>}/>

        
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
