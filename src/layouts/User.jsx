import { Outlet } from "react-router-dom";

//components
import Header from "@/components/Header/Header";

const User = () => {
  return (
    <>
      <Header />
      <main className="container-root text-white">
        <Outlet />
      </main>
    </>
  );
};

export default User;
