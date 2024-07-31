import { useState } from "react";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log("Le mandamos toda la info al server");

    console.log(nombre);
    console.log(email);
    console.log(telefono);
  };

  const capturarNombre = (event) => {
    setNombre(event.target.value);
  };
  const capturarEmail = (event) => {
    setEmail(event.target.value);
  };
  const capturarTelefono = (event) => {
    setTelefono(event.target.value);
  };

  return (
    <div>
      <h1>Aca va el formulario</h1>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturarNombre}
          name="nombre"
        />

        <input
          type="text"
          placeholder="Ingresa tu email"
          onChange={capturarEmail}
          name="email"
        />
        <input
          type="text"
          placeholder="Ingresa tu telefono"
          onChange={capturarTelefono}
          name="telefono"
        />

        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
