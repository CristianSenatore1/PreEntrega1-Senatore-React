import { useState } from "react";
import "./FormularioContacto.css"

const FormularioContacto = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("compra");
  const [novedades, setNovedades] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMotivoChange = (event) => {
    setMotivo(event.target.value);
  };

  const handleNovedadesChange = (event) => {
    setNovedades(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuario = { nombre , telefono}
    console.log(usuario)

    
  };

  return (
    <form onSubmit={handleSubmit} className="contacto">
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange} required />
        <br /><br />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" value={telefono} onChange={handleTelefonoChange} required />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
        <br /><br />

        <div>
          <label htmlFor="desplegable">Motivo de contacto:</label>
          <select name="desplegable" id="desplegable" value={motivo} onChange={handleMotivoChange}>
            <option value="compra">Compra</option>
            <option value="venta">Venta</option>
            <option value="otro">Alquiler</option>
          </select>
        </div>
        <br />

        <label htmlFor="novedades">Deseo recibir novedades:</label>
        <input type="checkbox" id="novedades" name="novedades" checked={novedades} onChange={handleNovedadesChange} />
      </div>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;
