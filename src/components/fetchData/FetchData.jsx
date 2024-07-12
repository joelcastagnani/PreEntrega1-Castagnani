import { useState, useEffect } from "react";

const FetchData = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProducts = fetch("https://fakestoreapi.com/products");
        getProducts.then((res) => res.json()).then((res) => setProductos(res));
    }, []);

    const createNewProduct = () => {
        let newProduct = {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        };

        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                //info para el BE
                //autenticacion
                //tipo de datos a transferir
            },
            body: JSON.stringify(newProduct),
        });
    };
    const deleteProduct = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE",
            headers: {
                //info para el BE
                //autenticacion
                //tipo de datos a transferir
            },
        });
    };
    const updateProduct = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PATCH",
            headers: {
                //info para el BE
                //autenticacion
                //tipo de datos a transferir
            },
            body: JSON.stringify( {title: "Nuevo titulo", price: 123} ),
        });
    };
    
    return (
        <div>
            {productos.map((producto, indice) => (
                <h2 key={producto.id}>{producto.title}</h2>
            ))}

            <button onClick={createNewProduct}>Crear</button>
        </div>
    );
};

export default FetchData