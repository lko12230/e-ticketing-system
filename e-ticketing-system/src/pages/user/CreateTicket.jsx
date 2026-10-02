import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Send,
  Paperclip,
  X,
  Upload,
  Ticket,
  AlertCircle,
  FileText,
  User,
  Mail,
  ChevronDown,
  CheckCircle2
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import UserIdentityCard from "../../components/common/user/UserIdentityCard";


function CreateTicket() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    project: "",
    subject: "",
    category: "",
    priority: "Medium",
    description: ""
  });

  const [attachments, setAttachments] = useState([]);

  const [submitted, setSubmitted] = useState(false);


  /* ============================================================
     PROJECTS
  ============================================================ */

  const projects = [
    "REDTAG",
    "TRENT",
    "SMITHS",
    "VMART",
    "TATA",
    "PROJ-X",
    "PROJ-Y"
  ];


  /* ============================================================
     CATEGORIES
  ============================================================ */

  const categories = [
    "Application Issue",
    "Inventory",
    "Order Management",
    "Shipment",
    "Putaway",
    "RF",
    "Integration",
    "Access",
    "Reporting",
    "Other"
  ];


  /* ============================================================
     INPUT CHANGE
  ============================================================ */

  const handleChange = (event) => {

    const {
      name,
      value
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

  };


  /* ============================================================
     FILE UPLOAD
  ============================================================ */

  const handleFileChange = (event) => {

    const files = Array.from(
      event.target.files
    );

    setAttachments((previous) => [
      ...previous,
      ...files
    ]);

  };


  /* ============================================================
     REMOVE FILE
  ============================================================ */

  const removeAttachment = (index) => {

    setAttachments((previous) =>
      previous.filter(
        (_, fileIndex) =>
          fileIndex !== index
      )
    );

  };


  /* ============================================================
     SUBMIT
  ============================================================ */

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log(
      "Ticket Data:",
      formData
    );

    console.log(
      "Attachments:",
      attachments
    );

    setSubmitted(true);

  };


  /* ============================================================
     CANCEL
  ============================================================ */

  const handleCancel = () => {

    navigate("/user/dashboard");

  };


  /* ============================================================
     SUCCESS SCREEN
  ============================================================ */

  if (submitted) {

    return (

      <MainLayout>

        <div className="create-ticket-page">

          <div className="ticket-success-card">

            <div className="ticket-success-icon">
              <CheckCircle2 size={42} />
            </div>

            <h1>
              Ticket Created Successfully
            </h1>

            <p>
              Your ticket has been submitted successfully.
              You can track the ticket from My Tickets.
            </p>

            <div className="created-ticket-number">
              <span>
                Ticket ID
              </span>

              <strong>
                TKT-1025
              </strong>
            </div>

            <div className="success-actions">

              <button
                type="button"
                className="secondary-ticket-button"
                onClick={() =>
                  navigate("/user/tickets")
                }
              >
                View My Tickets
              </button>

              <button
                type="button"
                className="primary-ticket-button"
                onClick={() => {
                  setSubmitted(false);

                  setFormData({
                    project: "",
                    subject: "",
                    category: "",
                    priority: "Medium",
                    description: ""
                  });

                  setAttachments([]);
                }}
              >
                Create Another Ticket
              </button>

            </div>

          </div>

        </div>

      </MainLayout>

    );

  }


  return (

    <MainLayout>

      <div className="create-ticket-page">


        {/* ====================================================
            PAGE HEADER
        ==================================================== */}

        <div className="create-ticket-header">

          <div>

            <button
              type="button"
              className="back-ticket-button"
              onClick={() =>
                navigate("/user/dashboard")
              }
            >
              <ArrowLeft size={17} />
              Back to Dashboard
            </button>

            <div className="create-ticket-title-row">

              <div className="create-ticket-title-icon">
                <Ticket size={23} />
              </div>

              <div>

                <h1>
                  Create New Ticket
                </h1>

                <p>
                  Raise a new support request for your project.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ====================================================
            MAIN CONTENT
        ==================================================== */}

        <div className="create-ticket-layout">


          {/* ==================================================
              FORM
          ================================================== */}

          <form
            className="create-ticket-form-card"
            onSubmit={handleSubmit}
          >

              {/* =================================================
            USER IDENTITY
        ================================================= */}

        <UserIdentityCard />

            {/* FORM HEADER */}

            <div className="create-form-header">

              <div>

                <h2>
                  Ticket Information
                </h2>

                <p>
                  Provide the details of the issue.
                </p>

              </div>

              <span className="required-note">
                * Required
              </span>

            </div>


            {/* =================================================
                PROJECT
            ================================================= */}

            <div className="form-field">

              <label htmlFor="project">
                Project
                <span>*</span>
              </label>

              <div className="create-select-wrapper">

                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Project
                  </option>

                  {projects.map((project) => (

                    <option
                      key={project}
                      value={project}
                    >
                      {project}
                    </option>

                  ))}

                </select>

                <ChevronDown size={17} />

              </div>

            </div>


            {/* =================================================
                SUBJECT
            ================================================= */}

            <div className="form-field">

              <label htmlFor="subject">
                Subject
                <span>*</span>
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter a short description of the issue"
                required
              />

              <small>
                Keep the subject short and specific.
              </small>

            </div>


            {/* =================================================
                CATEGORY + PRIORITY
            ================================================= */}

            <div className="form-two-column">


              {/* CATEGORY */}

              <div className="form-field">

                <label htmlFor="category">
                  Category
                  <span>*</span>
                </label>

                <div className="create-select-wrapper">

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Category
                    </option>

                    {categories.map((category) => (

                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>

                    ))}

                  </select>

                  <ChevronDown size={17} />

                </div>

              </div>


              {/* PRIORITY */}

              <div className="form-field">

                <label htmlFor="priority">
                  Priority
                  <span>*</span>
                </label>

                <div className="create-select-wrapper">

                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    required
                  >

                    <option value="Low">
                      Low
                    </option>

                    <option value="Medium">
                      Medium
                    </option>

                    <option value="High">
                      High
                    </option>

                    <option value="Critical">
                      Critical
                    </option>

                  </select>

                  <ChevronDown size={17} />

                </div>

              </div>

            </div>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div className="form-field">

              <label htmlFor="description">
                Description
                <span>*</span>
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the issue in detail. Include error messages, steps to reproduce, order/LPN/SKU details, or any other useful information."
                rows={7}
                required
              />

              <small>
                Provide as much information as possible to help
                resolve the issue quickly.
              </small>

            </div>


            {/* =================================================
                ATTACHMENTS
            ================================================= */}

            <div className="form-field">

              <label>
                Attachments
              </label>

              <div className="attachment-upload">

                <input
                  type="file"
                  id="ticket-attachments"
                  multiple
                  onChange={handleFileChange}
                  hidden
                />

                <label
                  htmlFor="ticket-attachments"
                  className="attachment-upload-box"
                >

                  <div className="upload-icon">
                    <Upload size={21} />
                  </div>

                  <div>

                    <strong>
                      Click to upload files
                    </strong>

                    <span>
                      PNG, JPG, PDF, DOC, XLS up to 10 MB
                    </span>

                  </div>

                </label>

              </div>


              {/* ATTACHMENT LIST */}

              {attachments.length > 0 && (

                <div className="attachment-list">

                  {attachments.map(
                    (file, index) => (

                      <div
                        className="attachment-item"
                        key={`${file.name}-${index}`}
                      >

                        <div className="attachment-file-icon">
                          <Paperclip size={16} />
                        </div>

                        <div className="attachment-file-info">

                          <strong>
                            {file.name}
                          </strong>

                          <span>
                            {(file.size / 1024).toFixed(1)} KB
                          </span>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeAttachment(index)
                          }
                        >
                          <X size={17} />
                        </button>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>


            {/* =================================================
                FORM ACTIONS
            ================================================= */}

            <div className="create-ticket-actions">

              <button
                type="button"
                className="cancel-ticket-button"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="submit-ticket-button"
              >

                <Send size={17} />

                Create Ticket

              </button>

            </div>

          </form>


          {/* ==================================================
              RIGHT SIDE INFORMATION
          ================================================== */}

          <div className="create-ticket-sidebar">


            {/* =================================================
                REQUESTER
            ================================================= */}

            <div className="ticket-info-card">

              <div className="ticket-info-card-header">

                <User size={18} />

                <h3>
                  Requester
                </h3>

              </div>

              <div className="requester-profile">

                <div className="requester-avatar">
                  AG
                </div>

                <div>

                  <strong>
                    Ayush Gupta
                  </strong>

                  <span>
                    Support Executive
                  </span>

                </div>

              </div>

              <div className="requester-detail">

                <Mail size={15} />

                <span>
                  ayush.gupta@example.com
                </span>

              </div>

            </div>


            {/* =================================================
                TICKET GUIDELINES
            ================================================= */}

            <div className="ticket-info-card">

              <div className="ticket-info-card-header">

                <FileText size={18} />

                <h3>
                  Ticket Guidelines
                </h3>

              </div>

              <ul className="ticket-guidelines">

                <li>
                  Select the correct project.
                </li>

                <li>
                  Use a clear and meaningful subject.
                </li>

                <li>
                  Mention relevant order, LPN, SKU or user details.
                </li>

                <li>
                  Add screenshots or logs when required.
                </li>

                <li>
                  Select priority according to business impact.
                </li>

              </ul>

            </div>


            {/* =================================================
                PRIORITY INFORMATION
            ================================================= */}

            <div className="ticket-info-card">

              <div className="ticket-info-card-header">

                <AlertCircle size={18} />

                <h3>
                  Priority Guide
                </h3>

              </div>


              <div className="priority-guide-item">

                <span className="priority-guide-dot critical"></span>

                <div>

                  <strong>
                    Critical
                  </strong>

                  <p>
                    Complete business operation is blocked.
                  </p>

                </div>

              </div>


              <div className="priority-guide-item">

                <span className="priority-guide-dot high"></span>

                <div>

                  <strong>
                    High
                  </strong>

                  <p>
                    Major functionality is impacted.
                  </p>

                </div>

              </div>


              <div className="priority-guide-item">

                <span className="priority-guide-dot medium"></span>

                <div>

                  <strong>
                    Medium
                  </strong>

                  <p>
                    Normal issue affecting the workflow.
                  </p>

                </div>

              </div>


              <div className="priority-guide-item">

                <span className="priority-guide-dot low"></span>

                <div>

                  <strong>
                    Low
                  </strong>

                  <p>
                    Minor issue or general request.
                  </p>

                </div>

              </div>

            </div>


          </div>

        </div>

      </div>

    </MainLayout>

  );
}


export default CreateTicket;