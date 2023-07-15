import { Outlet } from "react-router-dom";

//components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const User = () => {
  return (
    <>
      <Header />
      <main className="container-root text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default User;
