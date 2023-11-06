import { Menu } from "@mui/icons-material";
import { IconButton, Modal, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Nav() {
  const [smallNav, setNav] = useState(false); //state for navbar on small screen
  const links = ["Categories", "Shop", "About", "Contact us", "Blog"];
  const location = useLocation();
  useEffect(() => {
    // Scroll top when location changes and remove small nav if on phone screen
    setNav(false);
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src="../../DimeSafeLogo.png" alt="logo" className="h-6" />
      </NavLink>
      <div className="hidden md:flex gap-6 text-white">
        <NavLink
          to="/"
          className="hover:text-white p-5 align-middle text-center hover:border-white hover:bg-opacity-75 hover:bg-gray-700"
        >
          Home
        </NavLink>
        {links.map((link) => (
          <NavLink
            to={`${link.toLowerCase()}`}
            key={link}
            className="hover:text-white p-5 align-middle text-center hover:border-white hover:bg-opacity-75 hover:bg-gray-700"
          >
            {link}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <button className="text-white">
          <p className="text-xs rounded-full bg-gray-600 text-white">10</p>
          <ShoppingCartIcon />
        </button>
        <NavLink
          to="/signup"
          className="hidden p-5 md:block text-white border border-white green-button transition-all hover:border-white hover:text-textgreen hover:bg-gray-500"
        >
          Sign up
        </NavLink>
      </div>
      <IconButton
        className="hamburger hidden"
        onClick={() => {
          setNav(!smallNav);
        }}
      >
        <Menu className="text-white" />
      </IconButton>
      {/* Navbar for small screen */}
      {smallNav && (
        <Modal
          open={smallNav}
          onClose={() => {
            setNav(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper
            className={`h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 bg-slate-400 shadow-md w-11/12 md:w-2/4 px-8 py-1 flex flex-col gap-7 md:relative pt-16 transition-all ${
              smallNav ? "" : "hidden"
            } text-center`}
            elevation={3}
          >
            <div className="flex justify-between items-center">
              <NavLink to="/">
                <img
                  src="../../public/dark-serche.png"
                  alt="logo"
                  className="h-6"
                />
              </NavLink>
              <p
                className="text-xl"
                onClick={() => {
                  setNav(false);
                }}
              >
                x
              </p>
            </div>
            <NavLink to="/">Home</NavLink>
            {links.map((link) => (
              <NavLink
                to={`${link.toLowerCase()}`}
                key={link}
                className="hover:text-teal-600"
              >
                {link}
              </NavLink>
            ))}
          </Paper>
        </Modal>
      )}
    </nav>
  );
}

export default Nav;
