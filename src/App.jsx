import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  const [estaMontado, setEstaMontado] = useState(false);
  const montarDesmontar = () => {
    setEstaMontado(!estaMontado);
  };
  console.log(estaMontado);

  return (
    <div>
      <NavBar />

      {estaMontado ? <ItemListContainer greeting={"Greeting"} /> : null}

      <button onClick={montarDesmontar}>Montar / Desmontar</button>
    </div>
  );
}

export default App;
