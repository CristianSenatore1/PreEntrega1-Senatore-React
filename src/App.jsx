import "./App.css"; 
import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  


  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={ <ItemListContainer saludo = "Te presentamos nuestros vehículos y servicios en conjunto. ¡Te deseamos una agradable visita!"/> } />
        <Route path="/category/0kms" element={ <ItemListContainer saludo = "Te presentamos nuestros vehículos 0KMS!!"/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
