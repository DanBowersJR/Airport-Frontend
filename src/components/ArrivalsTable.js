// src/components/ArrivalsTable.js
import React from "react";

// Hardcoded airline lookup by flight number prefix
const airlineLookup = {
    AC: "Air Canada",
    WS: "WestJet",
    DL: "Delta Air Lines",
    BA: "British Airways",
    LH: "Lufthansa",
    AA: "American Airlines",
    UA: "United Airlines",
};

const ArrivalsTable = ({ arrivals = [], flights = [] }) => {
    // ✅ Fallback: use whichever prop has data
    const data = Array.isArray(arrivals) && arrivals.length > 0 ? arrivals : flights;
    const hasData = Array.isArray(data) && data.length > 0;

    // Resolve airline name
    const getAirlineName = (flightNumber) => {
        if (!flightNumber) return "—";
        const prefix = flightNumber.substring(0, 2);
        return airlineLookup[prefix] || "—";
    };

    // Format time
    const formatTime = (time) =>
        time ? new Date(time).toLocaleString() : "—";

    // Render status with badge colors
    const renderStatusBadge = (status) => {
        const colors = {
            SCHEDULED: "primary",
            ARRIVED: "success",
            IN_AIR: "info",
            DELAYED: "warning",
            CANCELLED: "danger",
            BOARDING: "secondary",
            LANDED: "success",
        };
        return (
            <span className={`badge bg-${colors[status] || "dark"}`}>
                {status}
            </span>
        );
    };

    return (
        <div className="card shadow-sm mb-4">
            {/* Card header with gradient */}
            <div
                className="card-header text-white fw-bold d-flex justify-content-between align-items-center"
                style={{
                    background: "linear-gradient(90deg, #1e3a8a, #2563eb, #3b82f6)",
                }}
            >
                <span>✈️ Arrivals</span>
                {hasData && (
                    <span className="badge bg-light text-dark">
                        {data.length} flights
                    </span>
                )}
            </div>

            {/* Table */}
            <div className="card-body p-0">
                <table className="table table-striped table-hover mb-0">
                    <thead className="table-light">
                    <tr>
                        <th>Flight #</th>
                        <th>Airline</th>
                        <th>Origin</th>
                        <th>Scheduled</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hasData ? (
                        data.map((f) => (
                            <tr key={f.id ?? `arrival-${f.flightNumber}`}>
                                <td className="fw-semibold">{f.flightNumber}</td>
                                <td>{getAirlineName(f.flightNumber)}</td>
                                <td>{f.originCode || "—"}</td>
                                <td>{formatTime(f.scheduledTime)}</td>
                                <td>{renderStatusBadge(f.status)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-3">
                                No arrivals available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArrivalsTable;
