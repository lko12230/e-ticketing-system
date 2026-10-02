import React, { useState } from "react";

import {
  Bell,
  Mail,
  Moon,
  Sun,
  Globe,
  Shield,
  Lock,
  KeyRound,
  Save,
  RotateCcw,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import UserIdentityCard from "../../components/common/user/UserIdentityCard";


function UserSettings() {

  /* =====================================================
     SETTINGS STATE
  ===================================================== */

  const [settings, setSettings] = useState({
    emailNotifications: true,
    ticketUpdates: true,
    ticketReplies: true,
    systemNotifications: true,
    darkMode: false,
    language: "English"
  });

  const [saved, setSaved] = useState(false);


  /* =====================================================
     HANDLE TOGGLE
  ===================================================== */

  const handleToggle = (name) => {

    setSettings((previous) => ({
      ...previous,
      [name]: !previous[name]
    }));

    setSaved(false);
  };


  /* =====================================================
     HANDLE INPUT
  ===================================================== */

  const handleChange = (event) => {

    const {
      name,
      value
    } = event.target;

    setSettings((previous) => ({
      ...previous,
      [name]: value
    }));

    setSaved(false);
  };


  /* =====================================================
     SAVE SETTINGS
  ===================================================== */

  const handleSave = () => {

    localStorage.setItem(
      "userSettings",
      JSON.stringify(settings)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };


  /* =====================================================
     RESET SETTINGS
  ===================================================== */

  const handleReset = () => {

    const defaultSettings = {
      emailNotifications: true,
      ticketUpdates: true,
      ticketReplies: true,
      systemNotifications: true,
      darkMode: false,
      language: "English"
    };

    setSettings(defaultSettings);

    localStorage.setItem(
      "userSettings",
      JSON.stringify(defaultSettings)
    );

    setSaved(false);
  };


  /* =====================================================
     JSX
  ===================================================== */

  return (

    <MainLayout>

      <div className="settings-page">


        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="settings-header">

          <div>

            <h1>
              Settings
            </h1>

            <p>
              Manage your account preferences and notifications.
            </p>

          </div>

        </div>


        {/* =================================================
            USER IDENTITY CARD
        ================================================= */}

        <UserIdentityCard />


        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        {saved && (

          <div className="settings-success">

            <CheckCircle2 size={18} />

            <span>
              Settings saved successfully.
            </span>

          </div>

        )}


        {/* =================================================
            SETTINGS CONTENT
        ================================================= */}

        <div className="settings-container">


          {/* =================================================
              NOTIFICATIONS
          ================================================= */}

          <section className="settings-card">

            <div className="settings-card-header">

              <div className="settings-icon">

                <Bell size={20} />

              </div>

              <div>

                <h2>
                  Notifications
                </h2>

                <p>
                  Choose how you want to receive notifications.
                </p>

              </div>

            </div>


            <div className="settings-options">


              {/* EMAIL NOTIFICATIONS */}

              <div className="settings-row">

                <div className="settings-row-left">

                  <div className="settings-row-icon">

                    <Mail size={18} />

                  </div>

                  <div>

                    <h3>
                      Email Notifications
                    </h3>

                    <p>
                      Receive important account notifications by email.
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  className={
                    settings.emailNotifications
                      ? "settings-switch settings-switch-active"
                      : "settings-switch"
                  }
                  onClick={() =>
                    handleToggle("emailNotifications")
                  }
                  aria-label="Toggle email notifications"
                >

                  <span />

                </button>

              </div>


              {/* TICKET UPDATES */}

              <div className="settings-row">

                <div className="settings-row-left">

                  <div className="settings-row-icon">

                    <Bell size={18} />

                  </div>

                  <div>

                    <h3>
                      Ticket Updates
                    </h3>

                    <p>
                      Get notified when the status of your ticket changes.
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  className={
                    settings.ticketUpdates
                      ? "settings-switch settings-switch-active"
                      : "settings-switch"
                  }
                  onClick={() =>
                    handleToggle("ticketUpdates")
                  }
                  aria-label="Toggle ticket updates"
                >

                  <span />

                </button>

              </div>


              {/* TICKET REPLIES */}

              <div className="settings-row">

                <div className="settings-row-left">

                  <div className="settings-row-icon">

                    <Mail size={18} />

                  </div>

                  <div>

                    <h3>
                      Ticket Replies
                    </h3>

                    <p>
                      Receive notifications when someone replies to your ticket.
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  className={
                    settings.ticketReplies
                      ? "settings-switch settings-switch-active"
                      : "settings-switch"
                  }
                  onClick={() =>
                    handleToggle("ticketReplies")
                  }
                  aria-label="Toggle ticket replies"
                >

                  <span />

                </button>

              </div>


              {/* SYSTEM NOTIFICATIONS */}

              <div className="settings-row settings-row-last">

                <div className="settings-row-left">

                  <div className="settings-row-icon">

                    <Shield size={18} />

                  </div>

                  <div>

                    <h3>
                      System Notifications
                    </h3>

                    <p>
                      Receive important system and security notifications.
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  className={
                    settings.systemNotifications
                      ? "settings-switch settings-switch-active"
                      : "settings-switch"
                  }
                  onClick={() =>
                    handleToggle("systemNotifications")
                  }
                  aria-label="Toggle system notifications"
                >

                  <span />

                </button>

              </div>


            </div>

          </section>


          {/* =================================================
              APPEARANCE
          ================================================= */}

          <section className="settings-card">

            <div className="settings-card-header">

              <div className="settings-icon">

                {settings.darkMode
                  ? <Moon size={20} />
                  : <Sun size={20} />
                }

              </div>


              <div>

                <h2>
                  Appearance
                </h2>

                <p>
                  Customize how the application looks for you.
                </p>

              </div>

            </div>


            <div className="settings-options">


              {/* DARK MODE */}

              <div className="settings-row">

                <div className="settings-row-left">

                  <div className="settings-row-icon">

                    {settings.darkMode
                      ? <Moon size={18} />
                      : <Sun size={18} />
                    }

                  </div>


                  <div>

                    <h3>
                      Dark Mode
                    </h3>

                    <p>
                      Use a darker appearance throughout the application.
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  className={
                    settings.darkMode
                      ? "settings-switch settings-switch-active"
                      : "settings-switch"
                  }
                  onClick={() =>
                    handleToggle("darkMode")
                  }
                  aria-label="Toggle dark mode"
                >

                  <span />

                </button>

              </div>


              {/* LANGUAGE */}

              <div className="settings-row settings-row-last">

                <div className="settings-row-left">

                  <div className="settings-row-icon">

                    <Globe size={18} />

                  </div>


                  <div>

                    <h3>
                      Language
                    </h3>

                    <p>
                      Select your preferred application language.
                    </p>

                  </div>

                </div>


                <select
                  name="language"
                  value={settings.language}
                  onChange={handleChange}
                  className="settings-select"
                >

                  <option value="English">
                    English
                  </option>

                  <option value="Hindi">
                    Hindi
                  </option>

                </select>

              </div>


            </div>

          </section>


          {/* =================================================
              SECURITY
          ================================================= */}

          <section className="settings-card">

            <div className="settings-card-header">

              <div className="settings-icon">

                <Shield size={20} />

              </div>


              <div>

                <h2>
                  Security
                </h2>

                <p>
                  Manage your account security settings.
                </p>

              </div>

            </div>


            <div className="settings-security-list">


              {/* CHANGE PASSWORD */}

              <button
                type="button"
                className="security-option"
              >

                <div className="security-option-left">

                  <div className="security-option-icon">

                    <Lock size={18} />

                  </div>


                  <div>

                    <h3>
                      Change Password
                    </h3>

                    <p>
                      Update your account password.
                    </p>

                  </div>

                </div>


                <ChevronRight size={18} />

              </button>


              {/* TWO FACTOR */}

              <button
                type="button"
                className="security-option"
              >

                <div className="security-option-left">

                  <div className="security-option-icon">

                    <KeyRound size={18} />

                  </div>


                  <div>

                    <h3>
                      Two-Factor Authentication
                    </h3>

                    <p>
                      Add an additional layer of security to your account.
                    </p>

                  </div>

                </div>


                <ChevronRight size={18} />

              </button>


            </div>

          </section>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="settings-actions">

            <button
              type="button"
              className="settings-reset-button"
              onClick={handleReset}
            >

              <RotateCcw size={17} />

              Reset

            </button>


            <button
              type="button"
              className="settings-save-button"
              onClick={handleSave}
            >

              <Save size={17} />

              Save Changes

            </button>

          </div>


        </div>

      </div>

    </MainLayout>

  );
}


export default UserSettings;