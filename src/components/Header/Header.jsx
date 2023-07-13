import Logo from "@/assets/logo.png";
import { Link, NavLink } from "react-router-dom";

import { FaUserAlt, FaShoppingBag } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import MobileMenu from "@/components/Header/MobileMenu";

import { useState } from "react";

import "@/styles/header.css";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <header className="h-full bg-white">
      <div className="container-root flex justify-between items-center px-6 h-16">
        <Link to={"/"}>
          <img src={Logo} alt="app logo" width={100} height={40} />
        </Link>

        {/* Desktop navbar */}
        <nav className="h-6 flex gap-5 font-medium max-sm:hidden">
          <NavLink to={"/categories"} className="nav-link-desktop">
            Categories
          </NavLink>
          <NavLink to={"/products"} className="">
            Products
          </NavLink>

          <Link to={"/basket"} className="nav-link-desktop">
            <FaShoppingBag size={18} />
          </Link>
          <Link to={"/login"} className="nav-link-desktop">
            <FaUserAlt size={18} />
          </Link>
        </nav>

        {/* Mobile menu button */}
        <nav className="hidden max-sm:flex">
          <button onClick={toggleMenu}>
            <IoMdMenu size={26} />
          </button>
        </nav>
      </div>
      {isMenu ? <MobileMenu /> : null}
    </header>
  );
};

export default Header;
