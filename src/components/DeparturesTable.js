// src/components/DeparturesTable.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DeparturesTable = ({ flights = [] }) => {
    const hasData = Array.isArray(flights) && flights.length > 0;

    // Helper to format datetime nicely
    const formatTime = (time) => {
        if (!time) return "—";
        const date = new Date(time);
        return date.toLocaleString();
    };

    // Hardcode airline lookup by flight number prefix
    const getAirlineName = (flightNumber) => {
        if (!flightNumber) return "—";
        if (flightNumber.startsWith("AC")) return "Air Canada";
        if (flightNumber.startsWith("DL")) return "Delta Air Lines";
        if (flightNumber.startsWith("WS")) return "WestJet";
        if (flightNumber.startsWith("LH")) return "Lufthansa";
        if (flightNumber.startsWith("BA")) return "British Airways";
        if (flightNumber.startsWith("AA")) return "American Airlines";
        if (flightNumber.startsWith("UA")) return "United Airlines";
        return "Unknown Airline";
    };

    // Status badges
    const getStatusBadge = (status) => {
        switch (status) {
            case "SCHEDULED":
                return <span className="badge bg-primary">{status}</span>;
            case "BOARDING":
                return <span className="badge bg-info text-dark">{status}</span>;
            case "IN_AIR":
                return <span className="badge bg-success">{status}</span>;
            case "DELAYED":
                return <span className="badge bg-warning text-dark">{status}</span>;
            case "CANCELLED":
                return <span className="badge bg-danger">{status}</span>;
            default:
                return <span className="badge bg-secondary">{status || "—"}</span>;
        }
    };

    return (
        <div className="card shadow-sm mb-4">
            <div
                className="card-header text-white"
                style={{
                    background: "linear-gradient(90deg, #2563eb, #1e40af)",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                }}
            >
                ✈️ Departures
            </div>
            <div className="card-body p-0">
                <table className="table table-striped mb-0">
                    <thead className="table-light">
                    <tr>
                        <th>Flight #</th>
                        <th>Airline</th>
                        <th>Destination</th>
                        <th>Scheduled</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hasData ? (
                        flights.map((f, i) => (
                            <tr key={f.id ?? `departure-${i}`}>
                                <td>{f.flightNumber || "—"}</td>
                                <td>{getAirlineName(f.flightNumber)}</td>
                                <td>{f.destinationCode || "—"}</td>
                                <td>{formatTime(f.scheduledTime)}</td>
                                <td>{getStatusBadge(f.status)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-3">
                                No departures available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeparturesTable;
