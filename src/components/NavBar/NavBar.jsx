import CartWidget from "../cartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <h2>Comision 57785</h2>

      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default NavBar;
