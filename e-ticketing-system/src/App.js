import React from "react";

import {
  BrowserRouter
} from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";


/* ================================
   GLOBAL STYLES
================================= */

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/responsive.css";
import "./styles/dashboard.css";
import "./styles/tickets.css";
import "./styles/create-ticket.css";
import "./styles/profile.css";
import "./styles/UserSettings.css";


function App() {

  return (

    <BrowserRouter>

      <AppRoutes />

    </BrowserRouter>

  );
}

export default App;