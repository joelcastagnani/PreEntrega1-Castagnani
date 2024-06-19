import NavBar  from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Greeting"} />
    </div>
  );
}

export default App;
