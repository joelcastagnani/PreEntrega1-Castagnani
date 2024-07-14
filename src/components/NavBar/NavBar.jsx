import CartWidget from "../cartWidget/CartWidget";
import MainIcon from "../mainIcon/MainIcon";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ children }) => {
  return (
    <div>
      <>
        <nav className="navBarContainer">
          <Link to="/">
            <MainIcon />
          </Link>

          <ul>
            <Link to="/category/Camisetas">Camisetas</Link>
            <Link to="/category/Pantalones">Pantalones</Link>
            <Link to="/category/Abrigos">Abrigos</Link>
            <Link to="/category/Vestidos">Vestidos</Link>
          </ul>

          <CartWidget />
        </nav>
      </>
    </div>
  );
};

export default NavBar;
