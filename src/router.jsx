import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ListPage from "./pages/ListPage/ListPage";
import ToPage from "./pages/ToPage/ToPage";
import RollingPage from "./pages/RollingPage/RollingPage";
import FromPage from "./pages/FromPage/FromPage";
import Layout from "./styles/Layout";
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="list" element={<ListPage />}></Route>
          <Route path="post" element={<ToPage />}></Route>
          <Route path="post:id" element={<RollingPage />}></Route>
          <Route path="post:id/message" element={<FromPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
