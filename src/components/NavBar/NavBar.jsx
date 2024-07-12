import CartWidget from "../cartWidget/CartWidget";
import MainIcon from "../mainIcon/MainIcon";
import "./NavBar.css";

const NavBar = ({ children }) => {
  console.log(children);
  return (
    <>
      <nav className="navBarContainer">
        <MainIcon />

        <ul>
          <li>Todas</li>
          <li>Urbanas</li>
          <li>Deportivas</li>
        </ul>

        <CartWidget />
      </nav>

      {children}
    </>
  );
};

export default NavBar;
