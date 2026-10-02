import React from "react";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";


/* ================================
   USER PAGES
================================= */

import UserDashboard from "../pages/user/UserDashboard";
import MyTickets from "../pages/user/MyTickets";
import CreateTicket from "../pages/user/CreateTicket";
import UserTicketDetails from "../pages/user/UserTicketDetails";
import UserProfile from "../pages/user/UserProfile";
import UserSettings from "../pages/user/UserSettings";


/* ================================
   ADMIN PAGES
================================= */

import AdminDashboard from "../pages/admin/AdminDashboard";
import AllTickets from "../pages/admin/AllTickets";
import Employees from "../pages/admin/Employees";
import Productivity from "../pages/admin/Productivity";
import Reports from "../pages/admin/Reports";
import AdminSettings from "../pages/admin/AdminSettings";


function AppRoutes() {

  return (

    <Routes>

      {/* ================================
          DEFAULT
      ================================= */}
      <Route
        path="/"
        element={
          <Navigate
            to="/user/dashboard"
            replace
          />
        }
      />


      {/* ================================
          USER
      ================================= */}

      <Route
        path="/user/dashboard"
        element={<UserDashboard />}
      />

      <Route
        path="/user/tickets"
        element={<MyTickets />}
      />

      <Route
        path="/user/create-ticket"
        element={<CreateTicket />}
      />

      <Route
        path="/user/tickets/:ticketId"
        element={<UserTicketDetails />}
      />

      <Route
        path="/user/profile"
        element={<UserProfile />}
      />

      <Route
        path="/user/settings"
        element={<UserSettings />}
      />


      {/* ================================
          ADMIN
      ================================= */}

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/tickets"
        element={<AllTickets />}
      />

      <Route
        path="/admin/employees"
        element={<Employees />}
      />

      <Route
        path="/admin/productivity"
        element={<Productivity />}
      />

      <Route
        path="/admin/reports"
        element={<Reports />}
      />

      <Route
        path="/admin/settings"
        element={<AdminSettings />}
      />


      {/* ================================
          FALLBACK
      ================================= */}

      <Route
        path="*"
        element={
          <Navigate
            to="/user/dashboard"
            replace
          />
        }
      />

    </Routes>

  );
}

export default AppRoutes;