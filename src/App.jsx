import Layout from "./components/latout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "sonner";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import { routes } from "./routes/routes";
// import Cart from "./pages/cart/Cart";
// import Checkout from "./pages/checkout/Checkout";
// import CheckoutFormik from "./pages/checkoutFormik/CheckoutFormik";
// import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
// import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" />
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => {
              return <Route key={id} path={path} element={<Element />} />;
            })}
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>

          <Route path="*" element={<h1> 404 Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
