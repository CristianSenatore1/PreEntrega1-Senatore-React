import CartWidget from "./CartWidget"
import "./navBar.css"



const NavBar = () => {

    return(
        <div className="nav-bar">
            <div>
                <img style = {{width:"150px"}} src={`../src/assets/leonTransparente.webp`}/>
            </div>
            <ul className="lista-menu">
                <a role="button" data-bs-toggle="dropdown" aria-expanded="true">Autos</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">0 kms</a></li>
                    <li><a class="dropdown-item" href="#">Usados</a></li>
                    <li><a class="dropdown-item" href="#">Alquiler</a></li></ul>
                <a role="button" >Servicios</a>
                <a role="button" >Administracion</a>
                <a role="button" >Contacto</a>                
            </ul>
            <CartWidget/>
        </div>
    )
}
export default NavBar