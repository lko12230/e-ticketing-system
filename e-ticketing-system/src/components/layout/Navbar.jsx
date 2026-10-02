import React, { useEffect, useState } from "react";

import {
  Search,
  Bell,
  ChevronDown,
  X,
  Building2
} from "lucide-react";

import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchText, setSearchText] =
    useState("");


  // =====================================================
  // CUSTOMER COMPANY
  // =====================================================

  const companyName =
    "Trangile Services Pvt. Ltd.";

  const companyShortName =
    "Trangile";


  // =====================================================
  // LOGGED-IN USER
  // =====================================================

  const user = {
    name: "Ayush Gupta",
    role: "Support Executive",
    initials: "AG"
  };


  // =====================================================
  // CTRL + K / CMD + K
  // =====================================================

  useEffect(() => {

    const handleKeyboardShortcut = (event) => {

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {

        event.preventDefault();

        setSearchOpen(true);

        setTimeout(() => {

          const input =
            document.getElementById(
              "quick-search-input"
            );

          if (input) {
            input.focus();
          }

        }, 50);

      }


      // ESC

      if (event.key === "Escape") {

        setSearchOpen(false);

        setSearchText("");

      }

    };


    document.addEventListener(
      "keydown",
      handleKeyboardShortcut
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyboardShortcut
      );

    };

  }, []);


  // =====================================================
  // OPEN SEARCH
  // =====================================================

  const openSearch = () => {

    setSearchOpen(true);

    setTimeout(() => {

      const input =
        document.getElementById(
          "quick-search-input"
        );

      if (input) {
        input.focus();
      }

    }, 50);

  };


  // =====================================================
  // CLOSE SEARCH
  // =====================================================

  const closeSearch = () => {

    setSearchOpen(false);

    setSearchText("");

  };


  // =====================================================
  // SEARCH
  // =====================================================

  const handleSearch = (event) => {

    event.preventDefault();

    const value =
      searchText.trim().toLowerCase();


    if (!value) {
      return;
    }


    // =================================================
    // TICKETS
    // =================================================

    if (
      value.includes("ticket") ||
      value.startsWith("tkt-")
    ) {

      navigate("/user/tickets");

      closeSearch();

      return;

    }


    // =================================================
    // CREATE TICKET
    // =================================================

    if (
      value.includes("create") ||
      value.includes("new ticket")
    ) {

      navigate("/user/create-ticket");

      closeSearch();

      return;

    }


    // =================================================
    // PROFILE
    // =================================================

    if (
      value.includes("profile") ||
      value.includes("my profile")
    ) {

      navigate("/user/profile");

      closeSearch();

      return;

    }


    // =================================================
    // SETTINGS
    // =================================================

    if (
      value.includes("setting") ||
      value.includes("settings")
    ) {

      navigate("/user/settings");

      closeSearch();

      return;

    }


    // =================================================
    // DASHBOARD
    // =================================================

    if (
      value.includes("dashboard") ||
      value === "home"
    ) {

      navigate("/user/dashboard");

      closeSearch();

      return;

    }

  };


  return (
    <>

      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <header className="navbar">


        {/* =================================================
            SEARCH
        ================================================= */}

        <button
          type="button"
          className="navbar-search"
          onClick={openSearch}
        >

          <Search
            size={19}
            className="search-icon"
          />

          <span className="navbar-search-placeholder">
            Search tickets...
          </span>

          <span className="search-shortcut">
            Ctrl K
          </span>

        </button>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="navbar-right">


          {/* =================================================
              CUSTOMER COMPANY
          ================================================= */}

          <div className="navbar-company">

            <div className="navbar-company-icon">

              <Building2 size={17} />

            </div>


            <div className="navbar-company-info">

              <span className="navbar-company-label">
                Organization
              </span>

              <strong
                title={companyName}
              >
                {companyName}
              </strong>

            </div>

          </div>


          {/* DIVIDER */}

          <div className="navbar-divider"></div>


          {/* =================================================
              NOTIFICATIONS
          ================================================= */}

          <button
            type="button"
            className="notification-button"
            aria-label="Notifications"
          >

            <Bell size={20} />

            <span className="notification-badge">
              3
            </span>

          </button>


          {/* DIVIDER */}

          <div className="navbar-divider"></div>


          {/* =================================================
              USER PROFILE
          ================================================= */}

          <button
            type="button"
            className="user-profile"
            onClick={() =>
              navigate("/user/profile")
            }
          >

            {/* AVATAR */}

            <div className="user-avatar">

              {user.initials}

            </div>


            {/* USER INFORMATION */}

            <div className="user-info">

              <span className="user-name">
                {user.name}
              </span>

              <span className="user-role">
                {user.role}
              </span>

            </div>


            {/* DROPDOWN ICON */}

            <ChevronDown
              size={17}
              className="user-dropdown-icon"
            />

          </button>

        </div>

      </header>


      {/* =================================================
          QUICK SEARCH MODAL
      ================================================= */}

      {searchOpen && (

        <div
          className="quick-search-overlay"
          onClick={closeSearch}
        >

          <div
            className="quick-search-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >


            {/* =================================================
                SEARCH HEADER
            ================================================= */}

            <div className="quick-search-header">

              <div className="quick-search-title">

                <Search size={19} />

                <span>
                  Quick Search
                </span>

              </div>


              <button
                type="button"
                className="quick-search-close"
                onClick={closeSearch}
              >

                <X size={18} />

              </button>

            </div>


            {/* =================================================
                SEARCH INPUT
            ================================================= */}

            <form
              className="quick-search-form"
              onSubmit={handleSearch}
            >

              <Search size={20} />

              <input
                id="quick-search-input"
                type="text"
                value={searchText}
                onChange={(event) =>
                  setSearchText(
                    event.target.value
                  )
                }
                placeholder="Search tickets, pages..."
                autoComplete="off"
              />

              <kbd>
                ESC
              </kbd>

            </form>


            {/* =================================================
                QUICK ACCESS
            ================================================= */}

            <div className="quick-search-content">

              <div className="quick-search-section-title">
                QUICK ACCESS
              </div>


              {/* DASHBOARD */}

              <button
                type="button"
                className="quick-search-item"
                onClick={() => {

                  navigate(
                    "/user/dashboard"
                  );

                  closeSearch();

                }}
              >

                <div className="quick-search-item-icon">
                  📊
                </div>

                <div>

                  <strong>
                    Dashboard
                  </strong>

                  <span>
                    Open your dashboard
                  </span>

                </div>

              </button>


              {/* MY TICKETS */}

              <button
                type="button"
                className="quick-search-item"
                onClick={() => {

                  navigate(
                    "/user/tickets"
                  );

                  closeSearch();

                }}
              >

                <div className="quick-search-item-icon">
                  🎫
                </div>

                <div>

                  <strong>
                    My Tickets
                  </strong>

                  <span>
                    View all your tickets
                  </span>

                </div>

              </button>


              {/* CREATE TICKET */}

              <button
                type="button"
                className="quick-search-item"
                onClick={() => {

                  navigate(
                    "/user/create-ticket"
                  );

                  closeSearch();

                }}
              >

                <div className="quick-search-item-icon">
                  ➕
                </div>

                <div>

                  <strong>
                    Create Ticket
                  </strong>

                  <span>
                    Create a new support ticket
                  </span>

                </div>

              </button>


              {/* MY PROFILE */}

              <button
                type="button"
                className="quick-search-item"
                onClick={() => {

                  navigate(
                    "/user/profile"
                  );

                  closeSearch();

                }}
              >

                <div className="quick-search-item-icon">
                  👤
                </div>

                <div>

                  <strong>
                    My Profile
                  </strong>

                  <span>
                    View your profile
                  </span>

                </div>

              </button>


              {/* SETTINGS */}

              <button
                type="button"
                className="quick-search-item"
                onClick={() => {

                  navigate(
                    "/user/settings"
                  );

                  closeSearch();

                }}
              >

                <div className="quick-search-item-icon">
                  ⚙️
                </div>

                <div>

                  <strong>
                    Settings
                  </strong>

                  <span>
                    Manage your settings
                  </span>

                </div>

              </button>

            </div>


            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="quick-search-footer">

              <span>
                Press
              </span>

              <kbd>
                ↑
              </kbd>

              <kbd>
                ↓
              </kbd>

              <span>
                to navigate
              </span>

              <span className="quick-footer-gap">
                •
              </span>

              <kbd>
                Enter
              </kbd>

              <span>
                to open
              </span>

              <span className="quick-footer-gap">
                •
              </span>

              <kbd>
                Esc
              </kbd>

              <span>
                to close
              </span>

            </div>

          </div>

        </div>

      )}

    </>
  );
}


export default Navbar;