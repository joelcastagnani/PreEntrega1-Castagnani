import { useState } from "react";
import { CartCounter } from "./CartCounter";

const CartCounterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Stock maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Minimo");
    }
  };

  return (
    <CartCounter
      contador={contador}
      sumar={sumar}
      restar={restar}
      onAdd={onAdd}
    />
  );
};

export default CartCounterContainer;
