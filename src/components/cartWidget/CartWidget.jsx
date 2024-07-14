import { CiShoppingCart } from "react-icons/ci";
import "./CartWidget.css";
import CartCounterContainer from "../cartCounter/CartCounterContainer";

//import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
//import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Link to="/cart">
      {/* <CartCounterContainer /> */}
      <CiShoppingCart size="2.7em" className="cartWidget" />
    </Link>
  );
};

export default CartWidget;

{
  /*  */
}
