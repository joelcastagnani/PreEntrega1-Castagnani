import NavBar  from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"hola como estas"} />
    </div>
  );
}

export default App;
