import React from "react";

import {
  Ticket,
  Clock3,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

function StatCard({
  title,
  value,
  change,
  description,
  type
}) {

  const icons = {
    blue: Ticket,
    orange: Clock3,
    red: AlertCircle,
    green: CheckCircle2
  };

  const Icon = icons[type] || Ticket;

  const isNegative = change.startsWith("-");

  return (
    <div className="stat-card">

      {/* ICON */}

      <div className={`stat-icon stat-icon-${type}`}>

        <Icon
          size={21}
          strokeWidth={2}
        />

      </div>

      {/* CONTENT */}

      <div className="stat-content">

        <p className="stat-title">
          {title}
        </p>

        <h2 className="stat-value">
          {value}
        </h2>

        <div className="stat-change">

          <span
            className={
              isNegative
                ? "change-negative"
                : "change-positive"
            }
          >
            {change}
          </span>

          <span className="change-description">
            {description}
          </span>

        </div>

      </div>

    </div>
  );
}

export default StatCard;