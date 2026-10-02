import React, { useRef, useState } from "react";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Ticket,
  Award,
  Code2,
  Save,
  X,
  LockKeyhole,
  Camera,
  CalendarDays
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import UserIdentityCard from "../../components/common/user/UserIdentityCard";


function UserProfile() {

  /* ============================================================
     PROFILE PHOTO
  ============================================================ */

  const fileInputRef = useRef(null);

  const [profilePhoto, setProfilePhoto] = useState(null);


  const handleProfilePhoto = (event) => {

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setProfilePhoto(imageUrl);

  };


  /* ============================================================
     COVER PHOTO
  ============================================================ */

  const coverInputRef = useRef(null);

  const [coverPhoto, setCoverPhoto] = useState(null);


  const handleCoverPhoto = (event) => {

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setCoverPhoto(imageUrl);

  };


  /* ============================================================
     EDIT PROFILE
  ============================================================ */

  const [isEditing, setIsEditing] = useState(false);


  /* ============================================================
     PROFILE DATA
  ============================================================ */

  const [profile, setProfile] = useState({

    firstName: "Ayush",

    lastName: "Gupta",

    email: "ayush.gupta@example.com",

    phone: "+91 98765 43210",

    employeeId: "EMP-10001",

    department: "Customer Support",

    designation: "Support Executive",

    location: "Gurugram, India",

    joiningDate: "15 July 2022",

    manager: "Rahul Sharma",

    timezone: "Asia/Kolkata",

    bio:
      "Software professional responsible for application support, ticket resolution, issue analysis and coordination across multiple projects."

  });


  const [editData, setEditData] = useState(profile);


  /* ============================================================
     STATS
  ============================================================ */

  const stats = [

    {
      label: "Total Tickets",
      value: "186",
      icon: Ticket,
      className: "profile-stat-blue"
    },

    {
      label: "Resolved",
      value: "154",
      icon: CheckCircle2,
      className: "profile-stat-green"
    },

    {
      label: "Avg. Resolution",
      value: "5.8h",
      icon: Clock3,
      className: "profile-stat-orange"
    },

    {
      label: "Projects",
      value: "7",
      icon: Building2,
      className: "profile-stat-purple"
    }

  ];


  /* ============================================================
     SKILLS
  ============================================================ */

  const skills = [
    "Java",
    "Spring Boot",
    "SQL",
    "REST API",
    "Hibernate",
    "WMS",
    "Oracle",
    "MySQL",
    "Git",
    "Postman"
  ];


  /* ============================================================
     PROJECTS
  ============================================================ */

  const projects = [

    {
      name: "REDTAG",
      role: "Support & CR",
      status: "Active",
      tickets: 42
    },

    {
      name: "TRENT",
      role: "Support & CR",
      status: "Active",
      tickets: 31
    },

    {
      name: "SMITHS",
      role: "Support",
      status: "Active",
      tickets: 28
    },

    {
      name: "VMART",
      role: "Application Support",
      status: "Active",
      tickets: 24
    }

  ];


  /* ============================================================
     EDIT CHANGE
  ============================================================ */

  const handleEditChange = (event) => {

    const {
      name,
      value
    } = event.target;

    setEditData((previous) => ({

      ...previous,

      [name]: value

    }));

  };


  /* ============================================================
     SAVE PROFILE
  ============================================================ */

  const handleSave = () => {

    setProfile(editData);

    setIsEditing(false);

  };


  /* ============================================================
     CANCEL EDIT
  ============================================================ */

  const handleCancel = () => {

    setEditData(profile);

    setIsEditing(false);

  };


  /* ============================================================
     FULL NAME
  ============================================================ */

  const fullName =
    `${profile.firstName} ${profile.lastName}`;


  return (

    <MainLayout>

      <div className="profile-page">


        {/* ======================================================
            MAIN PROFILE CARD
        ====================================================== */}

        <section className="linkedin-profile-card">


          {/* ====================================================
              BLUE COVER
          ==================================================== */}

          <div
            className="linkedin-cover"
            style={
              coverPhoto
                ? {
                    backgroundImage: `url(${coverPhoto})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }
                : undefined
            }
          >


            {/* TOOL NAME */}

            {!coverPhoto && (

              <div className="linkedin-cover-overlay">

                <span className="linkedin-cover-title">
                  E-Ticketing
                </span>

                <span className="linkedin-cover-subtitle">
                  Ticket Management System
                </span>

              </div>

            )}


            {/* COVER CAMERA */}

            <button
              type="button"
              className="linkedin-cover-edit"
              title="Change cover photo"
              onClick={() =>
                coverInputRef.current?.click()
              }
            >

              <Camera size={16} />

            </button>


            {/* COVER FILE INPUT */}

            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleCoverPhoto}
            />

          </div>


          {/* ====================================================
              PROFILE BODY
          ==================================================== */}

          <div className="linkedin-profile-body">


            {/* ==================================================
                PROFILE PHOTO
            ================================================== */}

            <div className="linkedin-photo-wrapper">


              <div className="linkedin-profile-photo">

                {profilePhoto ? (

                  <img
                    src={profilePhoto}
                    alt={fullName}
                  />

                ) : (

                  <span>
                    AG
                  </span>

                )}

              </div>


              {/* PHOTO CAMERA */}

              <button
                type="button"
                className="linkedin-photo-camera"
                title="Change profile photo"
                onClick={() =>
                  fileInputRef.current?.click()
                }
              >

                <Camera size={16} />

              </button>


              {/* PROFILE FILE INPUT */}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleProfilePhoto}
              />

            </div>


            {/* ==================================================
                PROFILE INFORMATION
            ================================================== */}

            <div className="linkedin-profile-main">


              {/* NAME */}

              <div className="linkedin-profile-name-row">

                <h1>
                  {fullName}
                </h1>


                <span className="linkedin-verified-badge">

                  <CheckCircle2 size={15} />

                  Verified

                </span>

              </div>


              {/* DESIGNATION */}

              <p className="linkedin-designation">

                {profile.designation}

              </p>


              {/* META */}

              <div className="linkedin-profile-meta">

                <span>

                  <Building2 size={15} />

                  {profile.department}

                </span>


                <span>

                  <MapPin size={15} />

                  {profile.location}

                </span>


                <span>

                  Employee ID:{" "}

                  <strong>
                    {profile.employeeId}
                  </strong>

                </span>

              </div>


              {/* IDENTITY STATUS */}

              <div className="linkedin-profile-status">

                <CheckCircle2 size={15} />

                Identity Verified & Linked

              </div>


            </div>


            {/* ==================================================
                EDIT PROFILE
            ================================================== */}

            <div className="linkedin-profile-actions">

              <button
                type="button"
                className="linkedin-edit-profile-btn"
                onClick={() => {

                  setEditData(profile);

                  setIsEditing(true);

                }}
              >

                <User size={16} />

                Edit Profile

              </button>

            </div>


          </div>


          {/* ====================================================
              PROFILE DETAILS
          ==================================================== */}

          <div className="linkedin-profile-details">


            {/* EMAIL */}

            <div className="linkedin-detail-item">

              <Mail size={17} />

              <div>

                <span>
                  Email
                </span>

                <strong>
                  {profile.email}
                </strong>

              </div>

            </div>


            {/* PHONE */}

            <div className="linkedin-detail-item">

              <Phone size={17} />

              <div>

                <span>
                  Phone
                </span>

                <strong>
                  {profile.phone}
                </strong>

              </div>

            </div>


            {/* DESIGNATION */}

            <div className="linkedin-detail-item">

              <BriefcaseBusiness size={17} />

              <div>

                <span>
                  Designation
                </span>

                <strong>
                  {profile.designation}
                </strong>

              </div>

            </div>


            {/* JOINED */}

            <div className="linkedin-detail-item">

              <CalendarDays size={17} />

              <div>

                <span>
                  Joined
                </span>

                <strong>
                  {profile.joiningDate}
                </strong>

              </div>

            </div>


          </div>


          {/* ====================================================
              IDENTITY VERIFICATION
          ==================================================== */}

          <div className="linkedin-identity-section">

            <UserIdentityCard />

          </div>


        </section>


        {/* ======================================================
            STATISTICS
        ====================================================== */}

        <section className="profile-stats-grid">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (

              <div
                className="profile-stat-card"
                key={stat.label}
              >

                <div
                  className={
                    `profile-stat-icon ${stat.className}`
                  }
                >

                  <Icon size={20} />

                </div>


                <div>

                  <span>
                    {stat.label}
                  </span>

                  <strong>
                    {stat.value}
                  </strong>

                </div>

              </div>

            );

          })}

        </section>


        {/* ======================================================
            PROFILE CONTENT
        ====================================================== */}

        <div className="profile-content-grid">


          {/* ====================================================
              LEFT COLUMN
          ==================================================== */}

          <div className="profile-left-column">


            {/* ABOUT */}

            <section className="profile-card">

              <div className="profile-card-header">

                <div>

                  <h2>
                    About
                  </h2>

                  <p>
                    Professional information
                  </p>

                </div>

                <User size={19} />

              </div>


              <p className="profile-about-text">

                {profile.bio}

              </p>

            </section>


            {/* PERSONAL INFORMATION */}

            <section className="profile-card">

              <div className="profile-card-header">

                <div>

                  <h2>
                    Personal Information
                  </h2>

                  <p>
                    Your basic personal details
                  </p>

                </div>

                <User size={19} />

              </div>


              <div className="profile-info-grid">


                <div className="profile-info-item">

                  <span>
                    First Name
                  </span>

                  <strong>
                    {profile.firstName}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Last Name
                  </span>

                  <strong>
                    {profile.lastName}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Email Address
                  </span>

                  <strong>
                    {profile.email}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Phone Number
                  </span>

                  <strong>
                    {profile.phone}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Location
                  </span>

                  <strong>
                    {profile.location}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Timezone
                  </span>

                  <strong>
                    {profile.timezone}
                  </strong>

                </div>


              </div>

            </section>


            {/* WORK INFORMATION */}

            <section className="profile-card">

              <div className="profile-card-header">

                <div>

                  <h2>
                    Work Information
                  </h2>

                  <p>
                    Employment and organization details
                  </p>

                </div>

                <BriefcaseBusiness size={19} />

              </div>


              <div className="profile-info-grid">


                <div className="profile-info-item">

                  <span>
                    Employee ID
                  </span>

                  <strong>
                    {profile.employeeId}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Department
                  </span>

                  <strong>
                    {profile.department}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Designation
                  </span>

                  <strong>
                    {profile.designation}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Reporting Manager
                  </span>

                  <strong>
                    {profile.manager}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Joining Date
                  </span>

                  <strong>
                    {profile.joiningDate}
                  </strong>

                </div>


                <div className="profile-info-item">

                  <span>
                    Employment Status
                  </span>

                  <strong className="active-status">

                    <span></span>

                    Active

                  </strong>

                </div>


              </div>

            </section>


            {/* SKILLS */}

            <section className="profile-card">

              <div className="profile-card-header">

                <div>

                  <h2>
                    Skills & Expertise
                  </h2>

                  <p>
                    Technical skills associated with your profile
                  </p>

                </div>

                <Code2 size={19} />

              </div>


              <div className="profile-skills">

                {skills.map((skill) => (

                  <span
                    key={skill}
                    className="profile-skill"
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </section>


          </div>


          {/* ====================================================
              RIGHT COLUMN
          ==================================================== */}

          <div className="profile-right-column">


            {/* ACCOUNT STATUS */}

            <section className="profile-card">

              <div className="profile-card-header">

                <div>

                  <h2>
                    Account Status
                  </h2>

                  <p>
                    Current account information
                  </p>

                </div>

                <CheckCircle2 size={19} />

              </div>


              <div className="account-status-box">

                <div className="account-status-icon">

                  <CheckCircle2 size={20} />

                </div>


                <div>

                  <strong>
                    Account Active
                  </strong>

                  <span>
                    Your account is active and verified.
                  </span>

                </div>

              </div>


              <div className="account-security-item">

                <LockKeyhole size={16} />

                <div>

                  <strong>
                    Account Security
                  </strong>

                  <span>
                    Protected account
                  </span>

                </div>


                <CheckCircle2
                  size={16}
                  className="security-check"
                />

              </div>

            </section>


            {/* PROJECTS */}

            <section className="profile-card">

              <div className="profile-card-header">

                <div>

                  <h2>
                    Assigned Projects
                  </h2>

                  <p>
                    Your current project assignments
                  </p>

                </div>

                <Building2 size={19} />

              </div>


              <div className="profile-project-list">

                {projects.map((project) => (

                  <div
                    className="profile-project-item"
                    key={project.name}
                  >

                    <div className="project-profile-icon">

                      {project.name.substring(0, 1)}

                    </div>


                    <div className="profile-project-info">

                      <strong>
                        {project.name}
                      </strong>

                      <span>
                        {project.role}
                      </span>

                    </div>


                    <div className="profile-project-meta">

                      <span className="project-active-badge">

                        {project.status}

                      </span>

                      <small>
                        {project.tickets} tickets
                      </small>

                    </div>

                  </div>

                ))}

              </div>

            </section>


            {/* ACHIEVEMENT */}

            <section className="profile-achievement-card">

              <div className="achievement-icon">

                <Award size={22} />

              </div>


              <div>

                <span>
                  Professional Achievement
                </span>

                <strong>
                  Consistent Ticket Resolution
                </strong>

                <p>
                  Maintaining strong resolution performance
                  across assigned projects.
                </p>

              </div>

            </section>


          </div>


        </div>


      </div>


      {/* ========================================================
          EDIT PROFILE MODAL
      ======================================================== */}

      {isEditing && (

        <div className="profile-modal-overlay">


          <div className="profile-edit-modal">


            {/* HEADER */}

            <div className="profile-modal-header">

              <div>

                <h2>
                  Edit Profile
                </h2>

                <p>
                  Update your personal information.
                </p>

              </div>


              <button
                type="button"
                className="profile-modal-close"
                onClick={handleCancel}
                aria-label="Close"
              >

                <X size={19} />

              </button>

            </div>


            {/* FORM */}

            <div className="profile-edit-form">


              {/* NAME */}

              <div className="profile-edit-two-column">

                <div className="profile-edit-field">

                  <label>
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={editData.firstName}
                    onChange={handleEditChange}
                  />

                </div>


                <div className="profile-edit-field">

                  <label>
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={editData.lastName}
                    onChange={handleEditChange}
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div className="profile-edit-field">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleEditChange}
                />

              </div>


              {/* PHONE */}

              <div className="profile-edit-field">

                <label>
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={editData.phone}
                  onChange={handleEditChange}
                />

              </div>


              {/* LOCATION */}

              <div className="profile-edit-field">

                <label>
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={editData.location}
                  onChange={handleEditChange}
                />

              </div>


              {/* BIO */}

              <div className="profile-edit-field">

                <label>
                  About
                </label>

                <textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleEditChange}
                  rows="4"
                />

              </div>


            </div>


            {/* ACTIONS */}

            <div className="profile-modal-actions">

              <button
                type="button"
                className="profile-modal-cancel"
                onClick={handleCancel}
              >

                Cancel

              </button>


              <button
                type="button"
                className="profile-modal-save"
                onClick={handleSave}
              >

                <Save size={16} />

                Save Changes

              </button>

            </div>


          </div>

        </div>

      )}


    </MainLayout>

  );

}


export default UserProfile;