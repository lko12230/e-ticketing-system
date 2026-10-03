import React from "react";

import {
  ArrowLeft,
  Ticket,
  CheckCircle2,
  Clock3,
  AlertCircle,
  XCircle,
  CalendarDays,
  User,
  Building2,
  Tag,
  Mail,
  Flag,
  MessageSquare,
  CircleDot,
  ChevronRight,
  ShieldCheck,
  Activity,
  Layers3
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import "../../styles/ticket-details.css";

/* =========================================================
   TICKETS DATA
========================================================= */

const tickets = [
  {
    id: "TKT-1024",
    project: "REDTAG",
    subject: "Unable to create shipment",
    description:
      "Shipment creation is failing for the selected order.",
    priority: "High",
    status: "Open",
    source: "Email",
    createdAt: "30 Sep 2026",
    updatedAt: "30 Sep 2026",
    assignee: "Ayush Gupta",
    category: "Shipment"
  },

  {
    id: "TKT-1023",
    project: "TRENT",
    subject: "Order allocation issue",
    description:
      "Order is not getting allocated correctly.",
    priority: "Medium",
    status: "In Progress",
    source: "Email",
    createdAt: "29 Sep 2026",
    updatedAt: "30 Sep 2026",
    assignee: "Ayush Gupta",
    category: "Order Management"
  },

  {
    id: "TKT-1022",
    project: "SMITHS",
    subject: "Inventory mismatch",
    description:
      "Inventory quantity is different between WMS and system.",
    priority: "High",
    status: "Resolved",
    source: "Email",
    createdAt: "29 Sep 2026",
    updatedAt: "29 Sep 2026",
    assignee: "Ayush Gupta",
    category: "Inventory"
  },

  {
    id: "TKT-1021",
    project: "VMART",
    subject: "Putaway task not generated",
    description:
      "Putaway task is not getting generated after receiving.",
    priority: "Medium",
    status: "In Progress",
    source: "Manual",
    createdAt: "28 Sep 2026",
    updatedAt: "29 Sep 2026",
    assignee: "Ayush Gupta",
    category: "Putaway"
  },

  {
    id: "TKT-1020",
    project: "TATA",
    subject: "User access request",
    description:
      "User requires access to the WMS application.",
    priority: "Low",
    status: "Resolved",
    source: "Email",
    createdAt: "27 Sep 2026",
    updatedAt: "28 Sep 2026",
    assignee: "Ayush Gupta",
    category: "Access"
  },

  {
    id: "TKT-1019",
    project: "PROJ-X",
    subject: "API integration issue",
    description:
      "API integration is returning an unexpected response.",
    priority: "High",
    status: "Open",
    source: "Email",
    createdAt: "26 Sep 2026",
    updatedAt: "27 Sep 2026",
    assignee: "Ayush Gupta",
    category: "Integration"
  },

  {
    id: "TKT-1018",
    project: "PROJ-Y",
    subject: "Report generation issue",
    description:
      "Daily report is not getting generated.",
    priority: "Medium",
    status: "Pending",
    source: "Manual",
    createdAt: "25 Sep 2026",
    updatedAt: "26 Sep 2026",
    assignee: "Ayush Gupta",
    category: "Reporting"
  },

  {
    id: "TKT-1017",
    project: "REDTAG",
    subject: "RF screen validation issue",
    description:
      "Validation is not working correctly on RF screen.",
    priority: "High",
    status: "Resolved",
    source: "Email",
    createdAt: "24 Sep 2026",
    updatedAt: "25 Sep 2026",
    assignee: "Ayush Gupta",
    category: "RF"
  }
];

/* =========================================================
   STATUS STEPS
========================================================= */

const statusSteps = [
  {
    key: "Created",
    label: "Ticket Created",
    icon: Ticket
  },
  {
    key: "Assigned",
    label: "Assigned",
    icon: User
  },
  {
    key: "In Progress",
    label: "In Progress",
    icon: Clock3
  },
  {
    key: "Resolved",
    label: "Resolved",
    icon: CheckCircle2
  }
];

/* =========================================================
   COMPONENT
========================================================= */

function UserTicketDetails() {
  const navigate = useNavigate();

  const { ticketId } = useParams();

  /* =======================================================
     FIND TICKET
  ======================================================= */

  const ticket = tickets.find(
    (item) => item.id === ticketId
  );

  /* =======================================================
     STATUS POSITION
     
     Created      -> 1
     Open         -> 2
     Pending      -> 2
     In Progress  -> 3
     Resolved     -> 4
  ======================================================= */

  const getStatusPosition = (status) => {
    switch (status) {
      case "Open":
        return 2;

      case "Pending":
        return 2;

      case "In Progress":
        return 3;

      case "Resolved":
        return 4;

      default:
        return 1;
    }
  };

  const currentPosition = getStatusPosition(
    ticket?.status
  );

  /* =======================================================
     STATUS CLASS
  ======================================================= */

  const getStatusClass = (status) => {
    switch (status) {
      case "Open":
        return "ticket-detail-status ticket-detail-status-open";

      case "In Progress":
        return "ticket-detail-status ticket-detail-status-progress";

      case "Pending":
        return "ticket-detail-status ticket-detail-status-pending";

      case "Resolved":
        return "ticket-detail-status ticket-detail-status-resolved";

      default:
        return "ticket-detail-status";
    }
  };

  /* =======================================================
     PRIORITY CLASS
  ======================================================= */

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "ticket-detail-priority ticket-detail-priority-high";

      case "Medium":
        return "ticket-detail-priority ticket-detail-priority-medium";

      case "Low":
        return "ticket-detail-priority ticket-detail-priority-low";

      default:
        return "ticket-detail-priority";
    }
  };

  /* =======================================================
     STATUS ICON
  ======================================================= */

  const getStatusIcon = (status) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle2 size={15} />;

      case "In Progress":
        return <Clock3 size={15} />;

      case "Open":
        return <AlertCircle size={15} />;

      case "Pending":
        return <XCircle size={15} />;

      default:
        return <CircleDot size={15} />;
    }
  };

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!ticket) {
    return (
      <MainLayout>

        <div className="ticket-detail-page">

          <div className="ticket-detail-not-found">

            <div className="ticket-detail-not-found-icon">
              <Ticket size={30} />
            </div>

            <h1>
              Ticket Not Found
            </h1>

            <p>
              The ticket you are looking for does not exist.
            </p>

            <button
              type="button"
              className="ticket-detail-back-button"
              onClick={() => navigate("/user/tickets")}
            >
              <ArrowLeft size={17} />
              Back to My Tickets
            </button>

          </div>

        </div>

      </MainLayout>
    );
  }

  /* =======================================================
     MAIN RENDER
  ======================================================= */

  return (
    <MainLayout>

      <div className="ticket-detail-page">

        {/* =================================================
            BACK NAVIGATION
        ================================================= */}

        <button
          type="button"
          className="ticket-detail-back-link"
          onClick={() => navigate("/user/tickets")}
        >
          <ArrowLeft size={17} />
          Back to My Tickets
        </button>


        {/* =================================================
            HERO / TICKET HEADER
        ================================================= */}

        <section className="ticket-detail-header">

          <div className="ticket-detail-header-left">

            {/* Ticket Icon */}

            <div className="ticket-detail-main-icon">
              <Ticket size={25} />
            </div>


            {/* Header Content */}

            <div className="ticket-detail-header-content">

              {/* Ticket ID + Project */}

              <div className="ticket-detail-id-row">

                <span className="ticket-detail-id">
                  {ticket.id}
                </span>

                <span className="ticket-detail-project">
                  {ticket.project}
                </span>

              </div>


              {/* Subject */}

              <h1>
                {ticket.subject}
              </h1>


              {/* Category + Created */}

              <p>
                {ticket.category}
                {" "}
                · Created on {ticket.createdAt}
              </p>


              {/* Additional Metadata */}

              <div className="ticket-detail-meta-row">

                {/* Priority */}

                <span
                  className={getPriorityClass(
                    ticket.priority
                  )}
                >

                  <span className="priority-dot" />

                  {ticket.priority} Priority

                </span>


                {/* Source */}

                <span className="ticket-header-meta">

                  <Mail size={12} />

                  {ticket.source}

                </span>


                {/* Updated */}

                <span className="ticket-header-meta">

                  <CalendarDays size={12} />

                  Updated {ticket.updatedAt}

                </span>

              </div>

            </div>

          </div>


          {/* Current Status */}

          <div className="ticket-detail-header-right">

            <span
              className={getStatusClass(
                ticket.status
              )}
            >

              {getStatusIcon(ticket.status)}

              {ticket.status}

            </span>

          </div>

        </section>


        {/* =================================================
            STATUS TRACKING
        ================================================= */}

        <section className="ticket-tracking-card">

          <div className="ticket-section-header">

            <div>

              <div className="ticket-section-title-row">

                <div className="ticket-section-title-icon">
                  <Activity size={16} />
                </div>

                <h2>
                  Ticket Status
                </h2>

              </div>

              <p>
                Track the progress of your support request.
              </p>

            </div>


            <span className="tracking-current-status">

              Current:
              {" "}
              {ticket.status}

            </span>

          </div>


          <div className="ticket-tracking-wrapper">

            {/* Tracking Line */}

            <div className="ticket-tracking-line">

              <div
                className="ticket-tracking-progress"
                style={{
                  width: `${((currentPosition - 1) / 3) * 100}%`
                }}
              />

            </div>


            {/* Tracking Steps */}

            <div className="ticket-tracking-steps">

              {statusSteps.map(
                (step, index) => {

                  const StepIcon =
                    step.icon;

                  const stepNumber =
                    index + 1;

                  const isCompleted =
                    stepNumber <
                    currentPosition;

                  const isCurrent =
                    stepNumber ===
                    currentPosition;

                  const isPending =
                    stepNumber >
                    currentPosition;


                  return (
                    <div
                      key={step.key}
                      className={`
                        ticket-tracking-step
                        ${
                          isCompleted
                            ? "tracking-step-completed"
                            : ""
                        }
                        ${
                          isCurrent
                            ? "tracking-step-current"
                            : ""
                        }
                        ${
                          isPending
                            ? "tracking-step-pending"
                            : ""
                        }
                      `}
                    >

                      {/* Step Circle */}

                      <div className="tracking-step-circle">

                        {isCompleted ? (
                          <CheckCircle2
                            size={19}
                          />
                        ) : (
                          <StepIcon
                            size={18}
                          />
                        )}

                      </div>


                      {/* Step Name */}

                      <strong>
                        {step.key}
                      </strong>


                      {/* Step Description */}

                      <span>
                        {step.label}
                      </span>


                      {/* Completed */}

                      {isCompleted && (
                        <small>
                          Completed
                        </small>
                      )}


                      {/* Current */}

                      {isCurrent && (
                        <small>
                          Current Status
                        </small>
                      )}

                    </div>
                  );
                }
              )}

            </div>

          </div>


          {/* Pending Notice */}

          {ticket.status === "Pending" && (

            <div className="ticket-pending-notice">

              <Clock3 size={18} />

              <div>

                <strong>
                  Ticket is currently pending
                </strong>

                <span>
                  Our support team is waiting
                  for the required information
                  or action before continuing.
                </span>

              </div>

            </div>

          )}

        </section>


        {/* =================================================
            INFORMATION + ASSIGNEE
        ================================================= */}

        <div className="ticket-detail-grid">


          {/* =================================================
              TICKET INFORMATION
          ================================================= */}

          <section className="ticket-info-card">

            <div className="ticket-section-header">

              <div>

                <div className="ticket-section-title-row">

                  <div className="ticket-section-title-icon">
                    <Layers3 size={16} />
                  </div>

                  <h2>
                    Ticket Information
                  </h2>

                </div>

                <p>
                  Details related to this support request.
                </p>

              </div>

            </div>


            <div className="ticket-info-grid">


              {/* Ticket ID */}

              <div className="ticket-info-item">

                <div className="ticket-info-icon">
                  <Ticket size={17} />
                </div>

                <div>

                  <span>
                    Ticket ID
                  </span>

                  <strong>
                    {ticket.id}
                  </strong>

                </div>

              </div>


              {/* Project */}

              <div className="ticket-info-item">

                <div className="ticket-info-icon">
                  <Building2 size={17} />
                </div>

                <div>

                  <span>
                    Project
                  </span>

                  <strong>
                    {ticket.project}
                  </strong>

                </div>

              </div>


              {/* Category */}

              <div className="ticket-info-item">

                <div className="ticket-info-icon">
                  <Tag size={17} />
                </div>

                <div>

                  <span>
                    Category
                  </span>

                  <strong>
                    {ticket.category}
                  </strong>

                </div>

              </div>


              {/* Priority */}

              <div className="ticket-info-item">

                <div className="ticket-info-icon">
                  <Flag size={17} />
                </div>

                <div>

                  <span>
                    Priority
                  </span>

                  <strong>

                    <span
                      className={getPriorityClass(
                        ticket.priority
                      )}
                    >

                      <span className="priority-dot" />

                      {ticket.priority}

                    </span>

                  </strong>

                </div>

              </div>


              {/* Source */}

              <div className="ticket-info-item">

                <div className="ticket-info-icon">
                  <Mail size={17} />
                </div>

                <div>

                  <span>
                    Source
                  </span>

                  <strong>
                    {ticket.source}
                  </strong>

                </div>

              </div>


              {/* Created */}

              <div className="ticket-info-item">

                <div className="ticket-info-icon">
                  <CalendarDays size={17} />
                </div>

                <div>

                  <span>
                    Created
                  </span>

                  <strong>
                    {ticket.createdAt}
                  </strong>

                </div>

              </div>


              {/* Updated */}

              <div className="ticket-info-item">

                <div className="ticket-info-icon">
                  <Clock3 size={17} />
                </div>

                <div>

                  <span>
                    Last Updated
                  </span>

                  <strong>
                    {ticket.updatedAt}
                  </strong>

                </div>

              </div>


              {/* Status */}

              <div className="ticket-info-item">

                <div className="ticket-info-icon">
                  <Activity size={17} />
                </div>

                <div>

                  <span>
                    Status
                  </span>

                  <strong>
                    {ticket.status}
                  </strong>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              ASSIGNED TO
          ================================================= */}

          <section className="ticket-assignee-card">

            <div className="ticket-section-header">

              <div>

                <div className="ticket-section-title-row">

                  <div className="ticket-section-title-icon">
                    <ShieldCheck size={16} />
                  </div>

                  <h2>
                    Assigned To
                  </h2>

                </div>

                <p>
                  Current ticket owner.
                </p>

              </div>

            </div>


            {/* Assignee */}

            <div className="ticket-assignee">

              <div className="ticket-assignee-avatar">
                AG
              </div>


              <div>

                <strong>
                  {ticket.assignee}
                </strong>

                <span>
                  Support Executive
                </span>

                <small>
                  Customer Support
                </small>

              </div>

            </div>


            {/* Divider */}

            <div className="ticket-assignee-divider" />


            {/* Assignment Status */}

            <div className="ticket-assignee-status">

              <CheckCircle2 size={16} />

              <div>

                <strong>
                  Assigned & Actively Monitored
                </strong>

                <span>
                  Your ticket is currently being
                  handled by the support team.
                </span>

              </div>

            </div>


            {/* Support Owner */}

            <div className="ticket-assignee-contact">

              <div className="assignee-contact-icon">
                <User size={14} />
              </div>

              <div>

                <span>
                  Support Owner
                </span>

                <strong>
                  {ticket.assignee}
                </strong>

              </div>

            </div>

          </section>

        </div>


        {/* =================================================
            ISSUE DESCRIPTION
        ================================================= */}

        <section className="ticket-description-card">

          <div className="ticket-section-header">

            <div>

              <div className="ticket-section-title-row">

                <div className="ticket-section-title-icon">
                  <MessageSquare size={16} />
                </div>

                <h2>
                  Issue Description
                </h2>

              </div>

              <p>
                Information provided when the ticket
                was created.
              </p>

            </div>

          </div>


          <div className="ticket-description-content">

            <div className="description-icon">
              <MessageSquare size={19} />
            </div>


            <div className="description-text">

              <span className="description-label">
                CUSTOMER ISSUE
              </span>

              <p>
                {ticket.description}
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            TICKET ACTIVITY
        ================================================= */}

        <section className="ticket-activity-card">

          <div className="ticket-section-header">

            <div>

              <div className="ticket-section-title-row">

                <div className="ticket-section-title-icon">
                  <Activity size={16} />
                </div>

                <h2>
                  Ticket Activity
                </h2>

              </div>

              <p>
                Recent updates and ticket events.
              </p>

            </div>


            <span className="activity-live-badge">

              <span className="activity-live-dot" />

              Live Timeline

            </span>

          </div>


          <div className="ticket-activity-list">


            {/* =================================================
                TICKET CREATED
            ================================================= */}

            <div className="ticket-activity-item">

              <div className="activity-line">

                <div className="activity-dot activity-dot-completed">

                  <CheckCircle2 size={14} />

                </div>

              </div>


              <div className="activity-content">

                <div className="activity-title-row">

                  <strong>
                    Ticket created
                  </strong>

                  <span>
                    {ticket.createdAt}
                  </span>

                </div>


                <p>
                  Ticket {ticket.id} was created
                  and submitted for support.
                </p>

              </div>

            </div>


            {/* =================================================
                TICKET ASSIGNED
            ================================================= */}

            <div className="ticket-activity-item">

              <div className="activity-line">

                <div className="activity-dot activity-dot-completed">

                  <User size={14} />

                </div>

              </div>


              <div className="activity-content">

                <div className="activity-title-row">

                  <strong>
                    Ticket assigned
                  </strong>

                  <span>
                    {ticket.createdAt}
                  </span>

                </div>


                <p>
                  Ticket assigned to{" "}
                  {ticket.assignee}.
                </p>

              </div>

            </div>


            {/* =================================================
                CURRENT STATUS
            ================================================= */}

            <div className="ticket-activity-item">

              <div className="activity-line">

                <div className="activity-dot activity-dot-current">

                  <CircleDot size={14} />

                </div>

              </div>


              <div className="activity-content">

                <div className="activity-title-row">

                  <strong>
                    Status changed to{" "}
                    {ticket.status}
                  </strong>

                  <span>
                    {ticket.updatedAt}
                  </span>

                </div>


                <p>
                  The current ticket status is{" "}
                  {ticket.status}.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            ACTION BUTTONS
        ================================================= */}

        <div className="ticket-detail-actions">

          <button
            type="button"
            className="ticket-detail-secondary-button"
            onClick={() =>
              navigate("/user/tickets")
            }
          >

            <ArrowLeft size={17} />

            Back to My Tickets

          </button>


          <button
            type="button"
            className="ticket-detail-primary-button"
          >

            <MessageSquare size={17} />

            Add Comment

            <ChevronRight size={15} />

          </button>

        </div>

      </div>

    </MainLayout>
  );
}

export default UserTicketDetails;