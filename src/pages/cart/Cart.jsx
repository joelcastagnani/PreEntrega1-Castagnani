import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContextProvider, { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro queres eliminar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, borrar",
      denyButtonText: `No, no borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("No se elimino", "", "info");
      }
    });
  };

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
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <h5>El total a pagar es {total}</h5>

      {cart.length > 0 && <Button onClick={clearCart}>LimpiarCarrito</Button>}

      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
