import React from "react";

import {
  ArrowRight,
  ExternalLink
} from "lucide-react";

import {
  useNavigate
} from "react-router-dom";


function RecentTickets({ tickets }) {

  const navigate = useNavigate();


  return (

    <div className="recent-tickets">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="recent-tickets-header">

        <div>

          <div className="recent-tickets-title">
            Recent Tickets
          </div>

          <div className="dashboard-card-subtitle">
            Latest support tickets
          </div>

        </div>


        <button
          type="button"
          className="view-all-button"
          onClick={() => navigate("/tickets")}
        >

          <span>
            View All
          </span>

          <ArrowRight size={16} />

        </button>

      </div>


      {/* ======================================================
          TABLE
      ====================================================== */}

      <div className="table-wrapper">

        <table className="recent-tickets-table">

          <thead>

            <tr>

              <th>
                Ticket
              </th>

              <th>
                Subject
              </th>

              <th>
                Category
              </th>

              <th>
                Priority
              </th>

              <th>
                Status
              </th>

              <th>
                Assigned To
              </th>

              <th>
                Created
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            {tickets.map((ticket) => (

              <tr key={ticket.id}>

                {/* Ticket ID */}

                <td>

                  <span className="ticket-id">
                    {ticket.id}
                  </span>

                </td>


                {/* Subject */}

                <td>

                  <span className="ticket-subject">
                    {ticket.subject}
                  </span>

                </td>


                {/* Category */}

                <td>
                  {ticket.category}
                </td>


                {/* Priority */}

                <td>

                  <span
                    className={`priority-badge priority-${ticket.priority.toLowerCase()}`}
                  >
                    {ticket.priority}
                  </span>

                </td>


                {/* Status */}

                <td>

                  <span
                    className={`status-badge status-${ticket.status.toLowerCase()}`}
                  >
                    {ticket.status}
                  </span>

                </td>


                {/* Employee */}

                <td>
                  {ticket.employee}
                </td>


                {/* Created */}

                <td>
                  {ticket.createdAt}
                </td>


                {/* Action */}

                <td>

                  <button
                    type="button"
                    className="ticket-action-button"
                    onClick={() =>
                      navigate(`/tickets/${ticket.id}`)
                    }
                    title="View ticket"
                  >

                    <ExternalLink size={15} />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}


export default RecentTickets;