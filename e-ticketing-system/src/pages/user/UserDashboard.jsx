import React, { useMemo, useState } from "react";

import {
  FolderKanban,
  Ticket,
  Mail,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Timer,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  Activity
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import UserIdentityCard from "../../components/common/user/UserIdentityCard";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import "../../styles/dashboard.css";


function UserDashboard() {

  // =====================================================
  // PERIOD
  // =====================================================

  const [period, setPeriod] =
    useState("September 2026");


  // =====================================================
  // PROJECT FILTER
  // =====================================================

  const [selectedProject, setSelectedProject] =
    useState("ALL");


  // =====================================================
  // PROJECT DATA
  // =====================================================

  const projects = [
    {
      id: "P001",
      code: "REDTAG",
      name: "Redtag WMS",
      total: 42,
      received: 38,
      open: 5,
      inProgress: 7,
      resolved: 30,
      pending: 12,
      high: 8,
      medium: 21,
      low: 13,
      emailTickets: 34,
      manualTickets: 8,
      avgResolution: "6.2 hrs",
      sla: 94
    },

    {
      id: "P002",
      code: "TRENT",
      name: "Tata Trent",
      total: 31,
      received: 28,
      open: 4,
      inProgress: 6,
      resolved: 21,
      pending: 10,
      high: 5,
      medium: 17,
      low: 9,
      emailTickets: 23,
      manualTickets: 8,
      avgResolution: "5.4 hrs",
      sla: 91
    },

    {
      id: "P003",
      code: "SMITHS",
      name: "Smiths News",
      total: 28,
      received: 25,
      open: 3,
      inProgress: 4,
      resolved: 21,
      pending: 7,
      high: 4,
      medium: 15,
      low: 9,
      emailTickets: 20,
      manualTickets: 8,
      avgResolution: "4.8 hrs",
      sla: 95
    },

    {
      id: "P004",
      code: "VMART",
      name: "VMART",
      total: 24,
      received: 22,
      open: 5,
      inProgress: 3,
      resolved: 16,
      pending: 8,
      high: 6,
      medium: 11,
      low: 7,
      emailTickets: 18,
      manualTickets: 6,
      avgResolution: "7.1 hrs",
      sla: 88
    },

    {
      id: "P005",
      code: "TATA",
      name: "Tata Operations",
      total: 22,
      received: 20,
      open: 2,
      inProgress: 5,
      resolved: 15,
      pending: 7,
      high: 3,
      medium: 12,
      low: 7,
      emailTickets: 16,
      manualTickets: 6,
      avgResolution: "5.9 hrs",
      sla: 92
    },

    {
      id: "P006",
      code: "PROJ-X",
      name: "Project X",
      total: 21,
      received: 19,
      open: 4,
      inProgress: 3,
      resolved: 14,
      pending: 7,
      high: 4,
      medium: 10,
      low: 7,
      emailTickets: 15,
      manualTickets: 6,
      avgResolution: "6.7 hrs",
      sla: 90
    },

    {
      id: "P007",
      code: "PROJ-Y",
      name: "Project Y",
      total: 18,
      received: 17,
      open: 2,
      inProgress: 2,
      resolved: 14,
      pending: 4,
      high: 2,
      medium: 9,
      low: 7,
      emailTickets: 13,
      manualTickets: 5,
      avgResolution: "4.2 hrs",
      sla: 97
    }
  ];


  // =====================================================
  // MONTHLY TREND
  // =====================================================

  const monthlyTrend = [
    {
      month: "Apr",
      received: 42,
      resolved: 35,
      pending: 7
    },
    {
      month: "May",
      received: 51,
      resolved: 42,
      pending: 9
    },
    {
      month: "Jun",
      received: 47,
      resolved: 39,
      pending: 8
    },
    {
      month: "Jul",
      received: 63,
      resolved: 52,
      pending: 11
    },
    {
      month: "Aug",
      received: 71,
      resolved: 59,
      pending: 12
    },
    {
      month: "Sep",
      received: 169,
      resolved: 131,
      pending: 38
    }
  ];


  // =====================================================
  // RECENT TICKETS
  // =====================================================

  const recentTickets = [
    {
      id: "TKT-1024",
      project: "REDTAG",
      subject: "Unable to create shipment",
      priority: "High",
      status: "Open",
      source: "Email",
      created: "30 Sep 2026"
    },

    {
      id: "TKT-1023",
      project: "TRENT",
      subject: "Order allocation issue",
      priority: "Medium",
      status: "In Progress",
      source: "Email",
      created: "29 Sep 2026"
    },

    {
      id: "TKT-1022",
      project: "SMITHS",
      subject: "Inventory mismatch",
      priority: "High",
      status: "Resolved",
      source: "Email",
      created: "29 Sep 2026"
    },

    {
      id: "TKT-1021",
      project: "VMART",
      subject: "Putaway task not generated",
      priority: "Medium",
      status: "In Progress",
      source: "Manual",
      created: "28 Sep 2026"
    },

    {
      id: "TKT-1020",
      project: "TATA",
      subject: "User access request",
      priority: "Low",
      status: "Resolved",
      source: "Email",
      created: "27 Sep 2026"
    },

    {
      id: "TKT-1019",
      project: "PROJ-X",
      subject: "API integration issue",
      priority: "High",
      status: "Open",
      source: "Email",
      created: "26 Sep 2026"
    }
  ];


  // =====================================================
  // TOTALS
  // =====================================================

  const totals = useMemo(() => {

    return projects.reduce(
      (result, project) => {

        result.total += project.total;
        result.received += project.received;
        result.open += project.open;
        result.inProgress += project.inProgress;
        result.resolved += project.resolved;
        result.pending += project.pending;
        result.emailTickets += project.emailTickets;
        result.manualTickets += project.manualTickets;
        result.high += project.high;
        result.medium += project.medium;
        result.low += project.low;

        return result;

      },
      {
        total: 0,
        received: 0,
        open: 0,
        inProgress: 0,
        resolved: 0,
        pending: 0,
        emailTickets: 0,
        manualTickets: 0,
        high: 0,
        medium: 0,
        low: 0
      }
    );

  }, []);


  // =====================================================
  // SELECTED PROJECT
  // =====================================================

  const selectedProjectData =
    selectedProject === "ALL"
      ? null
      : projects.find(
          (project) =>
            project.code === selectedProject
        );


  // =====================================================
  // CHART DATA
  // =====================================================

  const projectChartData =
    projects.map((project) => ({
      project: project.code,
      received: project.received,
      resolved: project.resolved,
      pending: project.pending
    }));


  const overallResolutionRate =
    totals.total > 0
      ? Math.round(
          (totals.resolved / totals.total) * 100
        )
      : 0;


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <MainLayout>

      <div className="dashboard">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              My Dashboard
            </h1>

            <p className="dashboard-subtitle">
              Overview of your projects, tickets and workload.
            </p>

          </div>


          <div className="dashboard-period">

            <span>
              Reporting Period
            </span>

            <select
              value={period}
              onChange={(event) =>
                setPeriod(event.target.value)
              }
            >

              <option>
                September 2026
              </option>

              <option>
                August 2026
              </option>

              <option>
                July 2026
              </option>

              <option>
                Last 3 Months
              </option>

            </select>

          </div>

        </div>


        {/* =================================================
            USER IDENTITY
        ================================================= */}

        <UserIdentityCard />


        {/* =================================================
            SUMMARY
        ================================================= */}

        <div className="stats-grid">


          <div className="stat-card">

            <div className="stat-card-header">

              <span className="stat-card-title">
                My Projects
              </span>

              <div className="stat-card-icon stat-icon-blue">
                <FolderKanban size={19} />
              </div>

            </div>

            <div className="stat-card-value">
              {projects.length}
            </div>

            <div className="stat-card-description">
              Active projects
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-card-header">

              <span className="stat-card-title">
                Total Tickets
              </span>

              <div className="stat-card-icon stat-icon-purple">
                <Ticket size={19} />
              </div>

            </div>

            <div className="stat-card-value">
              {totals.total}
            </div>

            <div className="stat-card-description">
              Across all projects
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-card-header">

              <span className="stat-card-title">
                Resolved
              </span>

              <div className="stat-card-icon stat-icon-green">
                <CheckCircle2 size={19} />
              </div>

            </div>

            <div className="stat-card-value">
              {totals.resolved}
            </div>

            <div className="stat-card-description">
              {overallResolutionRate}% resolution rate
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-card-header">

              <span className="stat-card-title">
                Pending
              </span>

              <div className="stat-card-icon stat-icon-orange">
                <Clock3 size={19} />
              </div>

            </div>

            <div className="stat-card-value">
              {totals.pending}
            </div>

            <div className="stat-card-description">
              Requires attention
            </div>

          </div>

        </div>


        {/* =================================================
            CHARTS FIRST
        ================================================= */}

        <div className="dashboard-section-heading">

          <div>

            <h2>
              Analytics Overview
            </h2>

            <p>
              Ticket trends and project workload at a glance.
            </p>

          </div>

          <div className="analytics-live-badge">
            <span></span>
            Live Data
          </div>

        </div>


        <div className="dashboard-charts-grid">


          {/* =================================================
              TICKET TREND
          ================================================= */}

          <div className="dashboard-card trend-card">

            <div className="dashboard-card-header">

              <div>

                <div className="dashboard-card-title">
                  Ticket Trend
                </div>

                <div className="dashboard-card-subtitle">
                  Received, resolved and pending tickets.
                </div>

              </div>

              <div className="chart-icon-box chart-icon-blue">
                <TrendingUp size={18} />
              </div>

            </div>


            <div className="chart-container">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <LineChart
                  data={monthlyTrend}
                  margin={{
                    top: 15,
                    right: 20,
                    left: -15,
                    bottom: 5
                  }}
                >

                  <CartesianGrid
                    stroke="#e2e8f0"
                    strokeDasharray="4 4"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 11,
                      fill: "#64748b"
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 11,
                      fill: "#64748b"
                    }}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      boxShadow:
                        "0 8px 25px rgba(15,23,42,0.10)"
                    }}
                  />

                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="received"
                    name="Received"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{
                      r: 4,
                      fill: "#2563eb"
                    }}
                    activeDot={{
                      r: 6
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="resolved"
                    name="Resolved"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={{
                      r: 4,
                      fill: "#16a34a"
                    }}
                    activeDot={{
                      r: 6
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="pending"
                    name="Pending"
                    stroke="#ea580c"
                    strokeWidth={3}
                    dot={{
                      r: 4,
                      fill: "#ea580c"
                    }}
                    activeDot={{
                      r: 6
                    }}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>


          {/* =================================================
              PROJECT COMPARISON
          ================================================= */}

          <div className="dashboard-card category-card">

            <div className="dashboard-card-header">

              <div>

                <div className="dashboard-card-title">
                  Project Comparison
                </div>

                <div className="dashboard-card-subtitle">
                  Ticket volume across your projects.
                </div>

              </div>

              <div className="chart-icon-box chart-icon-purple">
                <Activity size={18} />
              </div>

            </div>


            <div className="chart-container">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart
                  data={projectChartData}
                  margin={{
                    top: 15,
                    right: 10,
                    left: -20,
                    bottom: 5
                  }}
                  barGap={4}
                >

                  <CartesianGrid
                    stroke="#e2e8f0"
                    strokeDasharray="4 4"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="project"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fill: "#64748b"
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fill: "#64748b"
                    }}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      boxShadow:
                        "0 8px 25px rgba(15,23,42,0.10)"
                    }}
                  />

                  <Legend />

                  <Bar
                    dataKey="received"
                    name="Received"
                    fill="#2563eb"
                    radius={[4, 4, 0, 0]}
                  />

                  <Bar
                    dataKey="resolved"
                    name="Resolved"
                    fill="#16a34a"
                    radius={[4, 4, 0, 0]}
                  />

                  <Bar
                    dataKey="pending"
                    name="Pending"
                    fill="#ea580c"
                    radius={[4, 4, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>


        {/* =================================================
            PROJECT DATA
        ================================================= */}

        <div className="dashboard-section-heading project-heading">

          <div>

            <h2>
              Project Workload
            </h2>

            <p>
              Detailed ticket distribution across all projects.
            </p>

          </div>

          <div className="project-count-badge">
            {projects.length} Projects
          </div>

        </div>


        <div className="dashboard-card project-table-card">

          <div className="project-table-wrapper">

            <table className="project-workload-table">

              <thead>

                <tr>

                  <th>Project</th>
                  <th>Total</th>
                  <th>Received</th>
                  <th>Open</th>
                  <th>In Progress</th>
                  <th>Resolved</th>
                  <th>Pending</th>
                  <th>Resolution</th>
                  <th>Avg. Time</th>

                </tr>

              </thead>


              <tbody>

                {projects.map((project) => {

                  const rate =
                    Math.round(
                      (project.resolved /
                        project.total) * 100
                    );


                  return (

                    <tr
                      key={project.id}
                      className={
                        selectedProject === project.code
                          ? "project-row-selected"
                          : ""
                      }
                      onClick={() =>
                        setSelectedProject(
                          project.code
                        )
                      }
                    >

                      <td>

                        <div className="project-table-name">

                          <div className="project-table-icon">
                            <FolderKanban size={15} />
                          </div>

                          <div>

                            <strong>
                              {project.name}
                            </strong>

                            <span>
                              {project.code}
                            </span>

                          </div>

                        </div>

                      </td>


                      <td>
                        <strong>
                          {project.total}
                        </strong>
                      </td>


                      <td className="blue-value">
                        {project.received}
                      </td>


                      <td className="red-value">
                        {project.open}
                      </td>


                      <td className="orange-value">
                        {project.inProgress}
                      </td>


                      <td className="green-value">
                        {project.resolved}
                      </td>


                      <td className="pending-value">
                        {project.pending}
                      </td>


                      <td>

                        <div className="table-resolution">

                          <div className="table-progress">

                            <div
                              style={{
                                width: `${rate}%`
                              }}
                            />

                          </div>

                          <span>
                            {rate}%
                          </span>

                        </div>

                      </td>


                      <td>
                        {project.avgResolution}
                      </td>

                    </tr>

                  );

                })}

              </tbody>

            </table>

          </div>

        </div>


        {/* =================================================
            SELECTED PROJECT
        ================================================= */}

        <div className="selected-project-section">

          <div className="selected-project-header">

            <div>

              <span>
                PROJECT DETAILS
              </span>

              <h2>
                {selectedProject === "ALL"
                  ? "All Projects"
                  : selectedProjectData?.name}
              </h2>

            </div>


            <div className="project-selector">

              <select
                value={selectedProject}
                onChange={(event) =>
                  setSelectedProject(
                    event.target.value
                  )
                }
              >

                <option value="ALL">
                  All Projects
                </option>

                {projects.map((project) => (

                  <option
                    key={project.id}
                    value={project.code}
                  >
                    {project.name}
                  </option>

                ))}

              </select>

              <ChevronDown size={16} />

            </div>

          </div>


          {selectedProjectData ? (

            <div className="selected-project-content">


              <div className="selected-project-stat">
                <Ticket size={18} />
                <span>Total Tickets</span>
                <strong>
                  {selectedProjectData.total}
                </strong>
              </div>


              <div className="selected-project-stat">
                <Mail size={18} />
                <span>Received</span>
                <strong>
                  {selectedProjectData.received}
                </strong>
              </div>


              <div className="selected-project-stat">
                <AlertCircle size={18} />
                <span>Open</span>
                <strong>
                  {selectedProjectData.open}
                </strong>
              </div>


              <div className="selected-project-stat">
                <Clock3 size={18} />
                <span>In Progress</span>
                <strong>
                  {selectedProjectData.inProgress}
                </strong>
              </div>


              <div className="selected-project-stat">
                <CheckCircle2 size={18} />
                <span>Resolved</span>
                <strong>
                  {selectedProjectData.resolved}
                </strong>
              </div>


              <div className="selected-project-stat">
                <Timer size={18} />
                <span>Avg. Resolution</span>
                <strong>
                  {selectedProjectData.avgResolution}
                </strong>
              </div>


              <div className="selected-project-source">

                <div>
                  <Mail size={17} />
                  <span>Email Tickets</span>
                  <strong>
                    {selectedProjectData.emailTickets}
                  </strong>
                </div>


                <div>
                  <Ticket size={17} />
                  <span>Manual Tickets</span>
                  <strong>
                    {selectedProjectData.manualTickets}
                  </strong>
                </div>


                <div>
                  <ShieldCheck size={17} />
                  <span>SLA Compliance</span>
                  <strong>
                    {selectedProjectData.sla}%
                  </strong>
                </div>

              </div>

            </div>

          ) : (

            <div className="all-project-message">

              <FolderKanban size={20} />

              <span>
                Select a project above to see detailed
                project-level information.
              </span>

            </div>

          )}

        </div>


        {/* =================================================
            RECENT TICKETS
        ================================================= */}

        <div className="recent-tickets">

          <div className="recent-tickets-header">

            <div>

              <div className="recent-tickets-title">
                Recent Tickets
              </div>

              <div className="dashboard-card-subtitle">
                Latest activity across your projects.
              </div>

            </div>


            <button
              type="button"
              className="view-all-button"
            >
              View All
              <ArrowRight size={15} />
            </button>

          </div>


          <div className="table-wrapper">

            <table className="recent-tickets-table">

              <thead>

                <tr>

                  <th>Ticket</th>
                  <th>Project</th>
                  <th>Subject</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Source</th>
                  <th>Created</th>

                </tr>

              </thead>


              <tbody>

                {recentTickets.map((ticket) => (

                  <tr key={ticket.id}>

                    <td>
                      <span className="ticket-id">
                        {ticket.id}
                      </span>
                    </td>

                    <td>
                      <span className="project-table-tag">
                        {ticket.project}
                      </span>
                    </td>

                    <td>
                      <span className="ticket-subject">
                        {ticket.subject}
                      </span>
                    </td>

                    <td>

                      <span
                        className={
                          `priority-badge priority-${ticket.priority.toLowerCase()}`
                        }
                      >
                        {ticket.priority}
                      </span>

                    </td>

                    <td>

                      <span
                        className={
                          `status-badge status-${ticket.status
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        }
                      >
                        {ticket.status}
                      </span>

                    </td>

                    <td>
                      <span className="ticket-source">
                        {ticket.source}
                      </span>
                    </td>

                    <td>
                      {ticket.created}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


      </div>

    </MainLayout>

  );
}


export default UserDashboard;