import ItemList from "./ItemList";
import { products } from "../../product";
import { useState, useEffect } from "react";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { db } from "../../firebaseConfig";
import Button from "@mui/material/Button";

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

  return (
    <div>
      {/* <Button onClick={addPoroducts}>Agregar productos</Button> */}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
