import { CiShoppingCart } from "react-icons/ci";
import "./CartWidget.css";
import CartCounterContainer from "../cartCounter/CartCounterContainer";

const CartWidget = () => {
  return (
    <div className="cartContainer">
      <CartCounterContainer />
      <CiShoppingCart size="2.7em" className="cartWidget" />
    </div>
  );
};

export default CartWidget;
