
import "./footer.css";
//import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div class="footer-contenedor">
      <div class="footer-row">
        <div class="footer-links">
          <h4>Nuestros Horarios:</h4>
          <p>
            <strong>Área comercial</strong>
          </p>
          <p>lun-vier 8:30 a 19:30</p>
          <p>sáb 9:00 a 18:30</p>
          <p>dom y feriados cerrado</p>
        </div>
        <div class="footer-links">
          <h4>Administración y Taller</h4>
          <p>lun-vier 8:30 a 19:30</p>
          <p>sáb 9:00 a 13:00</p>
          <p>dom y feriados cerrado</p>
        </div>
        <div class="footer-links">
          <h4>Síguenos</h4>
          <p>
            <a href="#">
              <i class="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </p>
        </div>
        <div class="footer-links">
          <h4>Encuéntranos</h4>
          <p>Dirección: Av. Ejemplo 123</p>
          <p>Ciudad, País</p>
        </div>
      </div>

      <div class="mapaUbicacion">
        <iframe
          class="mapaUbicacion"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8098.426572944247!2d-64.27221606920526!3d-31.414981904274438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298c95ab9728b%3A0xa946f51d4f2f3fc9!2sAvant%20Peugeot%20Concesionario%20Oficial!5e0!3m2!1ses-419!2sit!4v1699807320335!5m2!1ses-419!2sit"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    </div>
  );
};

export default Footer;
