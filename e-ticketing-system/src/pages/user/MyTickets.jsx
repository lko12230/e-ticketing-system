import React, { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Search,
  Plus,
  Filter,
  ChevronDown,
  ChevronRight,
  Ticket,
  Clock3,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Mail,
  User,
  CalendarDays,
  SlidersHorizontal
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import UserIdentityCard from "../../components/common/user/UserIdentityCard";


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
   COMPONENT
========================================================= */

function MyTickets() {

  const navigate = useNavigate();


  /* =========================================================
     FILTER STATES
  ========================================================= */

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [priorityFilter, setPriorityFilter] =
    useState("All");

  const [projectFilter, setProjectFilter] =
    useState("All");


  /* =========================================================
     FILTERED TICKETS
  ========================================================= */

  const filteredTickets = useMemo(() => {

    return tickets.filter((ticket) => {

      const search =
        searchTerm.toLowerCase().trim();


      const matchesSearch =
        ticket.id
          .toLowerCase()
          .includes(search) ||

        ticket.subject
          .toLowerCase()
          .includes(search) ||

        ticket.project
          .toLowerCase()
          .includes(search) ||

        ticket.category
          .toLowerCase()
          .includes(search);


      const matchesStatus =
        statusFilter === "All" ||
        ticket.status === statusFilter;


      const matchesPriority =
        priorityFilter === "All" ||
        ticket.priority === priorityFilter;


      const matchesProject =
        projectFilter === "All" ||
        ticket.project === projectFilter;


      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesProject
      );

    });

  }, [
    searchTerm,
    statusFilter,
    priorityFilter,
    projectFilter
  ]);


  /* =========================================================
     SUMMARY
  ========================================================= */

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) =>
      ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) =>
      ticket.status === "In Progress"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) =>
      ticket.status === "Resolved"
  ).length;


  /* =========================================================
     STATUS CLASS
  ========================================================= */

  const getStatusClass = (status) => {

    switch (status) {

      case "Open":
        return "ticket-status ticket-status-open";

      case "In Progress":
        return "ticket-status ticket-status-progress";

      case "Resolved":
        return "ticket-status ticket-status-resolved";

      case "Pending":
        return "ticket-status ticket-status-pending";

      default:
        return "ticket-status";

    }

  };


  /* =========================================================
     PRIORITY CLASS
  ========================================================= */

  const getPriorityClass = (priority) => {

    switch (priority) {

      case "High":
        return "ticket-priority ticket-priority-high";

      case "Medium":
        return "ticket-priority ticket-priority-medium";

      case "Low":
        return "ticket-priority ticket-priority-low";

      default:
        return "ticket-priority";

    }

  };


  /* =========================================================
     STATUS ICON
  ========================================================= */

  const getStatusIcon = (status) => {

    switch (status) {

      case "Open":
        return <AlertCircle size={14} />;

      case "In Progress":
        return <Clock3 size={14} />;

      case "Resolved":
        return <CheckCircle2 size={14} />;

      case "Pending":
        return <XCircle size={14} />;

      default:
        return null;

    }

  };


  /* =========================================================
     CLEAR FILTERS
  ========================================================= */

  const clearFilters = () => {

    setSearchTerm("");

    setStatusFilter("All");

    setPriorityFilter("All");

    setProjectFilter("All");

  };


  /* =========================================================
     OPEN TICKET
  ========================================================= */

  const openTicket = (ticketId) => {

    navigate(
      `/user/tickets/${ticketId}`
    );

  };


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <MainLayout>

      <div className="tickets-page">


        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="tickets-page-header">

          <div>

            <div className="page-breadcrumb">

              <span>
                Workspace
              </span>

              <ChevronRight size={14} />

              <span>
                My Tickets
              </span>

            </div>


            <h1>
              My Tickets
            </h1>


            <p>
              View and manage all tickets assigned to you.
            </p>

          </div>


          <button
            type="button"
            className="create-ticket-button"
            onClick={() =>
              navigate("/user/create-ticket")
            }
          >

            <Plus size={18} />

            Create Ticket

          </button>

        </div>


        {/* =================================================
            USER IDENTITY
        ================================================= */}

        <UserIdentityCard />


        {/* =================================================
            SUMMARY CARDS
        ================================================= */}

        <div className="ticket-summary-grid">


          {/* TOTAL */}

          <div className="ticket-summary-card">

            <div className="ticket-summary-icon total">

              <Ticket size={21} />

            </div>


            <div>

              <span>
                Total Tickets
              </span>

              <strong>
                {totalTickets}
              </strong>

            </div>

          </div>


          {/* OPEN */}

          <div className="ticket-summary-card">

            <div className="ticket-summary-icon open">

              <AlertCircle size={21} />

            </div>


            <div>

              <span>
                Open
              </span>

              <strong>
                {openTickets}
              </strong>

            </div>

          </div>


          {/* IN PROGRESS */}

          <div className="ticket-summary-card">

            <div className="ticket-summary-icon progress">

              <Clock3 size={21} />

            </div>


            <div>

              <span>
                In Progress
              </span>

              <strong>
                {inProgressTickets}
              </strong>

            </div>

          </div>


          {/* RESOLVED */}

          <div className="ticket-summary-card">

            <div className="ticket-summary-icon resolved">

              <CheckCircle2 size={21} />

            </div>


            <div>

              <span>
                Resolved
              </span>

              <strong>
                {resolvedTickets}
              </strong>

            </div>

          </div>


        </div>


        {/* =================================================
            FILTER SECTION
        ================================================= */}

        <div className="tickets-filter-card">


          <div className="tickets-filter-top">


            {/* SEARCH */}

            <div className="tickets-search-box">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search by ticket ID, subject, project..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />

            </div>


            {/* FILTER LABEL */}

            <div className="filter-label">

              <SlidersHorizontal size={16} />

              Filters

            </div>


          </div>


          <div className="tickets-filter-row">


            {/* =================================================
                STATUS
            ================================================= */}

            <div className="ticket-filter-control">

              <label>
                Status
              </label>


              <div className="select-wrapper">

                <select
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(event.target.value)
                  }
                >

                  <option value="All">
                    All Status
                  </option>

                  <option value="Open">
                    Open
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Resolved">
                    Resolved
                  </option>

                </select>


                <ChevronDown size={16} />

              </div>

            </div>


            {/* =================================================
                PRIORITY
            ================================================= */}

            <div className="ticket-filter-control">

              <label>
                Priority
              </label>


              <div className="select-wrapper">

                <select
                  value={priorityFilter}
                  onChange={(event) =>
                    setPriorityFilter(event.target.value)
                  }
                >

                  <option value="All">
                    All Priority
                  </option>

                  <option value="High">
                    High
                  </option>

                  <option value="Medium">
                    Medium
                  </option>

                  <option value="Low">
                    Low
                  </option>

                </select>


                <ChevronDown size={16} />

              </div>

            </div>


            {/* =================================================
                PROJECT
            ================================================= */}

            <div className="ticket-filter-control">

              <label>
                Project
              </label>


              <div className="select-wrapper">

                <select
                  value={projectFilter}
                  onChange={(event) =>
                    setProjectFilter(event.target.value)
                  }
                >

                  <option value="All">
                    All Projects
                  </option>

                  <option value="REDTAG">
                    REDTAG
                  </option>

                  <option value="TRENT">
                    TRENT
                  </option>

                  <option value="SMITHS">
                    SMITHS
                  </option>

                  <option value="VMART">
                    VMART
                  </option>

                  <option value="TATA">
                    TATA
                  </option>

                  <option value="PROJ-X">
                    PROJ-X
                  </option>

                  <option value="PROJ-Y">
                    PROJ-Y
                  </option>

                </select>


                <ChevronDown size={16} />

              </div>

            </div>


            {/* =================================================
                CLEAR FILTER
            ================================================= */}

            <button
              type="button"
              className="clear-filter-button"
              onClick={clearFilters}
            >

              Clear Filters

            </button>


          </div>

        </div>


        {/* =================================================
            TICKET TABLE
        ================================================= */}

        <div className="tickets-table-card">


          {/* TABLE HEADER */}

          <div className="tickets-table-header">

            <div>

              <h2>
                Ticket List
              </h2>

              <span>
                Showing{" "}
                {filteredTickets.length}{" "}
                of{" "}
                {totalTickets}{" "}
                tickets
              </span>

            </div>


            <button
              type="button"
              className="table-filter-button"
            >

              <Filter size={16} />

              Filter

            </button>

          </div>


          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {filteredTickets.length === 0 ? (

            <div className="tickets-empty-state">

              <div className="empty-ticket-icon">

                <Ticket size={30} />

              </div>


              <h3>
                No tickets found
              </h3>


              <p>
                Try changing your search or filter criteria.
              </p>


              <button
                type="button"
                onClick={clearFilters}
              >

                Clear Filters

              </button>

            </div>

          ) : (

            <div className="tickets-table-wrapper">

              <table className="tickets-table">


                <thead>

                  <tr>

                    <th>
                      Ticket
                    </th>

                    <th>
                      Project
                    </th>

                    <th>
                      Subject
                    </th>

                    <th>
                      Priority
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Source
                    </th>

                    <th>
                      Updated
                    </th>

                    <th>
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {filteredTickets.map((ticket) => (

                    <tr
                      key={ticket.id}
                      onClick={() =>
                        openTicket(ticket.id)
                      }
                    >


                      {/* TICKET */}

                      <td>

                        <div className="ticket-id-cell">

                          <div className="ticket-small-icon">

                            <Ticket size={16} />

                          </div>


                          <div>

                            <strong>
                              {ticket.id}
                            </strong>

                            <span>
                              {ticket.category}
                            </span>

                          </div>

                        </div>

                      </td>


                      {/* PROJECT */}

                      <td>

                        <span className="project-badge">

                          {ticket.project}

                        </span>

                      </td>


                      {/* SUBJECT */}

                      <td>

                        <div className="ticket-subject-cell">

                          <strong>
                            {ticket.subject}
                          </strong>

                          <span>
                            {ticket.description}
                          </span>

                        </div>

                      </td>


                      {/* PRIORITY */}

                      <td>

                        <span
                          className={getPriorityClass(
                            ticket.priority
                          )}
                        >

                          <span className="priority-dot">
                          </span>

                          {ticket.priority}

                        </span>

                      </td>


                      {/* STATUS */}

                      <td>

                        <span
                          className={getStatusClass(
                            ticket.status
                          )}
                        >

                          {getStatusIcon(
                            ticket.status
                          )}

                          {ticket.status}

                        </span>

                      </td>


                      {/* SOURCE */}

                      <td>

                        <span className="ticket-source">

                          {ticket.source === "Email" ? (

                            <Mail size={15} />

                          ) : (

                            <User size={15} />

                          )}

                          {ticket.source}

                        </span>

                      </td>


                      {/* UPDATED */}

                      <td>

                        <div className="ticket-date">

                          <CalendarDays size={15} />

                          {ticket.updatedAt}

                        </div>

                      </td>


                      {/* ACTION */}

                      <td>

                        <button
                          type="button"
                          className="ticket-view-button"
                          onClick={(event) => {

                            event.stopPropagation();

                            openTicket(ticket.id);

                          }}
                        >

                          View

                          <ChevronRight size={15} />

                        </button>

                      </td>


                    </tr>

                  ))}

                </tbody>


              </table>

            </div>

          )}

        </div>


      </div>

    </MainLayout>

  );

}


export default MyTickets;