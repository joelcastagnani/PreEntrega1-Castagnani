import ItemList from "./ItemList";
import { products } from "../../product";
import { useState, useEffect } from "react";
import "./ItemList.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    //SE CREA LA PROMESA (Esto no lo vamos a tener que hacer)
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = products.filter(
        (product) => product.category === name
      );
      if (x) {
        resolve(name ? arrayFiltered : products);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    //SE MANEJA LA PROMESA (Esto si)
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
