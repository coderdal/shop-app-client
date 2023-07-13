import { Outlet } from "react-router-dom";

//components
import Header from "@/components/Header";

const User = () => {
  return (
    <>
      <Header />
      <main className="container-root">
        <Outlet />
      </main>
    </>
  );
};

export default User;
