// src/components/AirportTable.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const demoCityMap = {
    YYZ: "Toronto",
    YTZ: "Toronto",
    JFK: "New York",
    LGA: "New York",
    LHR: "London",
    LAX: "Los Angeles",
    YVR: "Vancouver",
    FRA: "Frankfurt",
    ORD: "Chicago",
    MIA: "Miami",
};

const AirportTable = ({ airports = [] }) => {
    const hasData = Array.isArray(airports) && airports.length > 0;

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
                🛫 Airports
            </div>
            <div className="card-body p-0">
                <table className="table table-striped mb-0">
                    <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hasData ? (
                        airports.map((a) => (
                            <tr key={a.id ?? `airport-${a.code}`}>
                                <td>{a.id}</td>
                                <td>{a.code || "—"}</td>
                                <td>{a.name || "—"}</td>
                                <td>
                                    {a.city?.name ||
                                        a.cityName ||
                                        demoCityMap[a.code] ||
                                        "Demo City"}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-3">
                                No airports available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AirportTable;
