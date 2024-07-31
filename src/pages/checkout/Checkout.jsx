import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log("Le mandamos toda la info al server");
    console.log(user);
  };
  const handleChange = (event) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>Aca va el formulario</h1>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          name="nombre"
        />

        <input
          type="text"
          placeholder="Ingresa tu email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Ingresa tu telefono"
          onChange={handleChange}
          name="telefono"
        />

        <select onChange={handleChange}>
          <option label="uno" value={"one"} />
          <option label="dos" value={"two"} />
        </select>

        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
