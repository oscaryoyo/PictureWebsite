import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./component/Footer";

const Layout = () => {
  return (
    <div>
      <p>123</p>
      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="Aboutme">關於我</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
