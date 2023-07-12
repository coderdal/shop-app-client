import { Routes, Route } from "react-router-dom";

//layouts
import UserLayout from "@/layouts/user.jsx";

//Pages
import Home from "@/pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
