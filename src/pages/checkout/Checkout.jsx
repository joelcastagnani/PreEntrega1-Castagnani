import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>Aca va el formulario</h1>

      {orderId ? (
        <h2>Gracias por tu compra, tu ticket ID es: {orderId}</h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={handleChange}
            name="nombre"
          />

          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={handleChange}
            name="email"
          />

          <input
            type="text"
            placeholder="Ingresa tu telefono"
            onChange={handleChange}
            name="telefono"
          />

          <button>Enviar</button>
          <button type="button">Cancelar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
