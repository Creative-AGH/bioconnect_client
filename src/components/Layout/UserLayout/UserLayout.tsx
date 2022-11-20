import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "120px",
        }}
        className="container"
      >
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
