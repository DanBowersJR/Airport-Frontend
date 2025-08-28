// src/components/DeparturesTable.js
import React from "react";

const DeparturesTable = ({ flights = [] }) => {
    const hasData = Array.isArray(flights) && flights.length > 0;

    // helper to format datetime nicely
    const formatTime = (time) => {
        if (!time) return "—";
        const date = new Date(time);
        return date.toLocaleString(); // e.g., "Aug 28, 2025, 12:34 PM"
    };

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Flight #</th>
                <th>Airline</th>
                <th>Destination</th>
                <th>Scheduled</th>
                <th>Actual</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {hasData ? (
                flights.map((f, i) => (
                    <tr key={f.id ?? `departure-${i}`}>
                        <td>{f.flightNumber || "—"}</td>
                        <td>{f.airline?.name || f.airlineName || "—"}</td>
                        <td>{f.destinationCode || "—"}</td>
                        <td>{formatTime(f.scheduledTime)}</td>
                        <td>{formatTime(f.actualTime)}</td>
                        <td>{f.status || "SCHEDULED"}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="6" className="text-center">
                        No departures available
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default DeparturesTable;
