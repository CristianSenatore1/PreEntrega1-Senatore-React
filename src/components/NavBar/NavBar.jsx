import CartWidget from "./CartWidget"
import "./navBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
      <div className="nav-bar">
        <Link to="/">
          <img style={{ width: "150px" }} src="../src/assets/leonTransparente.webp" alt="Logo" />
        </Link>
        <ul className="lista-menu">
          <li>
            <Link to="/autos" className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="true">Autos</Link>
            <ul className="dropdown-menu">
              <li><Link to="/category/0km">0 kms</Link></li>
              <li><Link to="/category/alquiler">Alquiler</Link></li>
            </ul>
          </li>
          <li><Link to="/servicios" className="nav-link" role="button">Servicios</Link></li>
          <li><Link to="/administracion" className="nav-link" role="button">Administración</Link></li>
          <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
        </ul>
        <CartWidget />
      </div>
    );
  };
  
  export default NavBar;