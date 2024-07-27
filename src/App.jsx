import Layout from "./components/latout/Layout";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route path="*" element={<h1> 404 Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
