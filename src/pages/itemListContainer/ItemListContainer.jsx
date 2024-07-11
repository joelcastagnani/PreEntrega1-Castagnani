import ItemList from "./ItemList";
import { products } from "../../product";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    //SE CREA LA PROMESA (Esto no lo vamos a tener que hacer)
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(products);
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
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
