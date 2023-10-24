import { Outlet } from "react-router-dom";
import Signout from "../features/authentication/Signout";

function AppLayout() {
  return (
    <>
      <div>APP LAYOUT</div>
      <Signout />
      <Outlet />
    </>
  );
}

export default AppLayout;
