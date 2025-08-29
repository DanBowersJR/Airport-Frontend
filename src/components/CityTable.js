// src/components/CityTable.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Hardcoded fallback airport counts per city
const demoAirportCount = {
    Toronto: 2,       // Pearson + Billy Bishop
    "New York": 2,    // JFK + LaGuardia
    London: 1,        // Heathrow
    "Los Angeles": 1, // LAX
    Vancouver: 1,     // YVR
    Frankfurt: 1,     // FRA
    Chicago: 1,       // O’Hare
    Miami: 1,         // Miami International
};

const CityTable = ({ cities = [] }) => {
    const hasData = Array.isArray(cities) && cities.length > 0;

    return (
        <div className="card shadow-sm mb-4">
            <div
                className="card-header text-white"
                style={{
                    background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                }}
            >
                🌆 Cities
            </div>
            <div className="card-body p-0">
                <table className="table table-striped mb-0">
                    <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>State/Province</th>
                        <th>Population</th>
                        <th># Airports</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hasData ? (
                        cities.map((city) => (
                            <tr key={city.id ?? `city-${city.name}`}>
                                <td>{city.id}</td>
                                <td>{city.name}</td>
                                <td>{city.state || "—"}</td>
                                <td>{city.population?.toLocaleString?.() ?? "—"}</td>
                                <td>
                                    {city.airports?.length ??
                                        demoAirportCount[city.name] ??
                                        0}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-3">
                                No cities available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CityTable;
