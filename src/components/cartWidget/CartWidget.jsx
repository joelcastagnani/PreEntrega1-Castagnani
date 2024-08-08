import { Badge } from "@mui/material";
import CartCounterContainer from "../cartCounter/CartCounterContainer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CiShoppingCart } from "react-icons/ci";
import "./CartWidget.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <Link to="/cart">
      <Badge badgeContent={total} color="primary" showZero={true}>
        <ShoppingCartIcon color="white" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
