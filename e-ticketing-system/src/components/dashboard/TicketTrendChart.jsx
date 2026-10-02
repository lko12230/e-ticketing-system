import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


function TicketTrendChart({ data }) {

  return (

    <div className="dashboard-card trend-card">

      {/* Header */}

      <div className="dashboard-card-header">

        <div>

          <div className="dashboard-card-title">
            Ticket Trend
          </div>

          <div className="dashboard-card-subtitle">
            Tickets created vs resolved
          </div>

        </div>


        <select
          className="chart-filter"
          defaultValue="30"
        >

          <option value="7">
            Last 7 Days
          </option>

          <option value="30">
            Last 30 Days
          </option>

          <option value="90">
            Last 90 Days
          </option>

        </select>

      </div>


      {/* Chart */}

      <div className="chart-container">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 5
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
            />


            <XAxis
              dataKey="date"
              tick={{
                fontSize: 11,
                fill: "#64748b"
              }}
              axisLine={false}
              tickLine={false}
            />


            <YAxis
              tick={{
                fontSize: 11,
                fill: "#64748b"
              }}
              axisLine={false}
              tickLine={false}
            />


            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow:
                  "0 4px 12px rgba(15, 23, 42, 0.08)"
              }}
            />


            <Legend
              verticalAlign="top"
              align="right"
              height={35}
            />


            <Line
              type="monotone"
              dataKey="created"
              name="Created"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5
              }}
            />


            <Line
              type="monotone"
              dataKey="resolved"
              name="Resolved"
              stroke="#16a34a"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}


export default TicketTrendChart;