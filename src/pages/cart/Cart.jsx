import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContextProvider, { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  console.log(cart);
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h1>{elemento.title}</h1>
            <h4>{elemento.quantity}</h4>
            <h4>{elemento.price}</h4>
            <Button
              variant="contained"
              onClick={() => deleteProduct(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <h5>El total a pagar es {total}</h5>
      <Button onClick={clearCart}>LimpiarCarrito</Button>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
