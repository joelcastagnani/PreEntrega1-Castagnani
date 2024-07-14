import { ProductCard } from "../../components/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="itemListMainContainer">
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
            id={elemento.id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
