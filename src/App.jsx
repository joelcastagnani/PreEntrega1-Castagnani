import FetchData from "./components/fetchData/FetchData";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar >
        <ItemListContainer />
      </NavBar>
    </>
  );
}

export default App;
