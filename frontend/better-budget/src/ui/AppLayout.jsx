import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div>APP LAYOUT</div>
      <Outlet />
    </>
  );
}

export default AppLayout;
