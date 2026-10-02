import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout({ children }) {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-layout">

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`main-area ${
          collapsed ? "main-area-expanded" : ""
        }`}
      >

        <Navbar />

        <main className="page-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;