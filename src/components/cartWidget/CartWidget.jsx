import { CiShoppingCart } from "react-icons/ci";
import "./CartWidget.css";
import CartCounter from "../cartCounter/CartCounter";

const CartWidget = () => {
  return (
    <div className="cartContainer">
        <CartCounter />
        <CiShoppingCart size="2.7em" className="cartWidget" />
    </div>
  );
};

export default CartWidget;