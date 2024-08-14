import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import ItemDetailContainer from "../pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../pages/itemListContainer/ItemListContainer";

export const routes = [
  {
    id: 1,
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: 2,
    path: "/category/:name",
    Element: ItemDetailContainer,
  },
  {
    id: 3,
    path: "/cart",
    Element: Cart,
  },
  {
    id: 4,
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: 5,
    path: "/checkout",
    Element: Checkout,
  },
];

{
  /* <Route path="/" element={<ItemListContainer />} />
<Route path="/category/:name" element={<ItemListContainer />} />
<Route path="/cart" element={<Cart />} />
<Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
<Route path="/Checkout" element={<CheckoutFormik />} /> 
<Route path="/checkout" element={<Checkout />} /> */
}

// routes.map(({ id, path, Element }) => (
//   <Route path={path} key={id} element={<Element />} />
// ));
