export const CartCounter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>

      <button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};
