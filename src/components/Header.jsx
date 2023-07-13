import Logo from "@/assets/logo.png";
import { Link, NavLink } from "react-router-dom";

import { FaUserAlt, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-full bg-white">
      <div className="container-root flex justify-between items-center px-6 h-16">
        <Link to={"/"}>
          <img src={Logo} alt="app logo" width={100} height={40} />
        </Link>

        <nav className="h-6 flex gap-5 font-medium">
          <NavLink
            to={"/categories"}
            className="hover:opacity-70 transition-opacity"
          >
            Categories
          </NavLink>
          <NavLink
            to={"/products"}
            className="hover:opacity-70 transition-opacity"
          >
            Products
          </NavLink>

          <Link to={"/basket"} className="hover:opacity-70 transition-opacity">
            <FaShoppingBag size={18} />
          </Link>
          <Link to={"/login"} className="hover:opacity-70 transition-opacity">
            <FaUserAlt size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
