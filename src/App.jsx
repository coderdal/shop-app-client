import { Routes, Route } from "react-router-dom";

//layouts
import UserLayout from "@/layouts/user.jsx";

//Pages
import Home from "@/pages/Home.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
