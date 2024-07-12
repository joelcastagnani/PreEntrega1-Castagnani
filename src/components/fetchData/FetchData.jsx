import { useState, useEffect } from "react";

const FetchData = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProducts = fetch("https://fakestoreapi.com/products");
        getProducts.then((res) => res.json()).then((res) => setProductos(res));
    }, []);

    return (
        <div>
            {productos.map((producto, indice) => (
                <h2 key={producto.id}>{producto.title}</h2>
            ))}
        </div>
    );
};

export default FetchData