import { useState } from "react";
import { CartCounter } from "./CartCounter";

const CartCounterContainer = ({ onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
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
