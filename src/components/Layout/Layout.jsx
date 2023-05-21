import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { Main } from "./Layuot.styled";

function Layout() {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}

export default Layout;
