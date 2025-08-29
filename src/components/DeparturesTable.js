// src/components/DeparturesTable.js
import React from "react";

const DeparturesTable = ({ flights = [] }) => {
    const hasData = Array.isArray(flights) && flights.length > 0;

    // Helper to format datetime nicely
    const formatTime = (time) => {
        if (!time) return "—";
        const date = new Date(time);
        return date.toLocaleString(); // e.g., "Aug 28, 2025, 12:34 PM"
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

    return (
        <table className="table table-striped">
            <thead>
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
                        <td>{f.status || "SCHEDULED"}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="5" className="text-center">
                        No departures available
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default DeparturesTable;
