import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ title, description, price, id }) => {
  return (
    <div className="productCard">
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
      <Link to={`/itemDetail/${id}`}>Ver mas</Link>
    </div>
  );
};
