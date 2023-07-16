import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//layouts
import UserLayout from "@/layouts/user.jsx";

//Pages
import Home from "@/pages/Home.jsx";
import Products from "@/pages/Products.jsx";

import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
