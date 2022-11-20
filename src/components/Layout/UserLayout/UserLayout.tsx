import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "90px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
