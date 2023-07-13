import { NavLink } from "react-router-dom";

import { FaUserAlt, FaShoppingBag } from "react-icons/fa";

const MobileMenu = () => {
  return (
    <nav className="container-root px-6 py-5 flex-col border-t hidden max-sm:flex">
      <NavLink to={"/categories"} className="nav-link-mobile">
        Categories
      </NavLink>
      <NavLink to={"/products"} className="nav-link-mobile">
        Products
      </NavLink>

      <NavLink to={"/basket"} className="nav-link-mobile">
        <FaShoppingBag /> <span className="ml-2">Basket</span>
      </NavLink>
      <NavLink to={"/login"} className="nav-link-mobile">
        <FaUserAlt /> <span className="ml-2">Login</span>
      </NavLink>
    </nav>
  );
};

export default MobileMenu;
