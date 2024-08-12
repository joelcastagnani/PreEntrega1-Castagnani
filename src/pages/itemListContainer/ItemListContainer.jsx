import ItemList from "./ItemList";
import { products } from "../../product";
import { useState, useEffect } from "react";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { db } from "../../firebaseConfig";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);

    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    });
  }, [name]);

  if (items.length === 0) {
    return <SyncLoader />; //aca iria el skeleton
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
