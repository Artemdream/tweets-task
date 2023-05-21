import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

import Tweets from "../pages/Tweets";
import { GlobalStyle } from "../styles/GlobalStyle";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
