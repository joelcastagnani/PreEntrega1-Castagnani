import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
