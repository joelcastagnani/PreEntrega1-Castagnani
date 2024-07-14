import CartWidget from "../cartWidget/CartWidget";
import MainIcon from "../mainIcon/MainIcon";
import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";

const NavBar = ({ children }) => {
  return (
    <div>
      <>
        <nav className="navBarContainer">
          <Link to="/">
            <MainIcon />
          </Link>

          <ul>
            <li>Todas</li>
            <li>Urbanas</li>
            <li>Deportivas</li>
          </ul>

          <CartWidget />
        </nav>
      </>
      <Outlet />
    </div>
  );
};

export default NavBar;
