import React from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";


function TicketCategoryChart({ data }) {

  const COLORS = [
    "#2563eb",
    "#7c3aed",
    "#f59e0b",
    "#16a34a",
    "#64748b"
  ];


  return (

    <div className="dashboard-card category-card">

      {/* Header */}

      <div className="dashboard-card-header">

        <div>

          <div className="dashboard-card-title">
            Ticket Categories
          </div>

          <div className="dashboard-card-subtitle">
            Distribution of tickets
          </div>

        </div>

      </div>


      {/* Chart */}

      <div className="category-chart-container">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              innerRadius={62}
              outerRadius={95}
              paddingAngle={3}
            >

              {data.map((entry, index) => (

                <Cell
                  key={`category-${index}`}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />

              ))}

            </Pie>


            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow:
                  "0 4px 12px rgba(15, 23, 42, 0.08)"
              }}
            />


            <Legend
              verticalAlign="bottom"
              height={45}
              iconType="circle"
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}


export default TicketCategoryChart;