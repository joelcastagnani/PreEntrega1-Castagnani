import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [numero, setNumero] = useState(0);
  const [misProductos, setMisProductos] = useState([]);

  useEffect(() => {
    const productos = [
      {
        nombre: "Camiseta",
        precio: 19.99,
        disponibilidad: "En stock",
      },
      {
        nombre: "Pantalones",
        precio: 39.99,
        disponibilidad: "Agotado",
      },
      {
        nombre: "Zapatillas",
        precio: 59.99,
        disponibilidad: "En stock",
      },
    ];

    setMisProductos(productos);
  }, []);

  console.log(misProductos);

  const sumar = () => {
    setNumero(numero + 1);
  };

  return <ItemList greeting={greeting} sumar={sumar} numero={numero} />;
};

export default ItemListContainer;
