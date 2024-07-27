const Checkout = () => {
  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log("Se envio el formulario");
  };

  return (
    <div>
      <h1>Aca va el formulario</h1>;
      <form onSubmit={envioDeFormulario}>
        <input type="text" placeholder="Ingresa tu nombre" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
