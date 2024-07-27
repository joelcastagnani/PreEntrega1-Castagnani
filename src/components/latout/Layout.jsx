import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;