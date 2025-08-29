// src/components/CityTable.js
import React from "react";

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
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Id</th>
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
                    <td colSpan="5" className="text-center">
                        No cities available
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default CityTable;
