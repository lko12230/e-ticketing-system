import React from "react";

import {
  LayoutDashboard,
  Ticket,
  PlusCircle,
  User,
  Settings,
  LogOut,
  ChevronLeft
} from "lucide-react";

import {
  NavLink,
  useNavigate
} from "react-router-dom";


function Sidebar({
  collapsed,
  setCollapsed
}) {

  const navigate = useNavigate();


  /* =====================================================
     MENU ITEMS
  ===================================================== */

  const menuItems = [
    {
      name: "Dashboard",
      path: "/user/dashboard",
      icon: LayoutDashboard
    },
    {
      name: "My Tickets",
      path: "/user/tickets",
      icon: Ticket
    },
    {
      name: "Create Ticket",
      path: "/user/create-ticket",
      icon: PlusCircle
    },
    {
      name: "My Profile",
      path: "/user/profile",
      icon: User
    }
  ];


  /* =====================================================
     TOGGLE SIDEBAR
  ===================================================== */

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };


  return (

    <aside
      className={
        collapsed
          ? "sidebar sidebar-collapsed"
          : "sidebar"
      }
    >


      {/* =================================================
          BRAND
      ================================================= */}

      <div className="sidebar-brand">


        {/* LOGO */}

        <div
          className="brand-logo"
          title={
            collapsed
              ? "E-Ticketing"
              : undefined
          }
        >
          <Ticket size={22} />
        </div>


        {/* BRAND NAME */}

        {!collapsed && (
          <span className="brand-name">
            E-Ticketing
          </span>
        )}


        {/* =================================================
            EXPAND / COLLAPSE BUTTON
        ================================================= */}

        <button
          type="button"
          className="sidebar-toggle"
          onClick={handleToggle}
          title={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
          aria-label={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
        >

          <ChevronLeft size={18} />

        </button>


      </div>


      {/* =================================================
          WORKSPACE
      ================================================= */}

      <div className="sidebar-section">


        {/* SECTION TITLE */}

        {!collapsed && (
          <div className="sidebar-section-title">
            MY WORKSPACE
          </div>
        )}


        {/* NAVIGATION */}

        <nav className="sidebar-nav">


          {menuItems.map((item) => {

            const Icon = item.icon;


            return (

              <NavLink
                key={item.path}
                to={item.path}
                title={
                  collapsed
                    ? item.name
                    : undefined
                }
                className={({ isActive }) =>
                  isActive
                    ? "sidebar-link sidebar-link-active"
                    : "sidebar-link"
                }
              >


                {/* ICON */}

                <Icon size={20} />


                {/* TEXT */}

                {!collapsed && (
                  <span>
                    {item.name}
                  </span>
                )}


              </NavLink>

            );

          })}


        </nav>


      </div>


      {/* =================================================
          ACCOUNT
      ================================================= */}

      <div className="sidebar-bottom">


        {/* ACCOUNT TITLE */}

        {!collapsed && (
          <div className="sidebar-section-title">
            ACCOUNT
          </div>
        )}


        {/* =================================================
            SETTINGS
        ================================================= */}

        <NavLink
          to="/user/settings"
          title={
            collapsed
              ? "Settings"
              : undefined
          }
          className={({ isActive }) =>
            isActive
              ? "sidebar-link sidebar-link-active"
              : "sidebar-link"
          }
        >

          <Settings size={20} />


          {!collapsed && (
            <span>
              Settings
            </span>
          )}


        </NavLink>


        {/* =================================================
            LOGOUT
        ================================================= */}

        <button
          type="button"
          className="sidebar-link sidebar-logout"
          title={
            collapsed
              ? "Logout"
              : undefined
          }
          onClick={() => {
            navigate("/user/dashboard");
          }}
        >

          <LogOut size={20} />


          {!collapsed && (
            <span>
              Logout
            </span>
          )}


        </button>


      </div>


    </aside>

  );

}


export default Sidebar;