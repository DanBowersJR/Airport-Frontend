// src/components/CityTable.js
import React from "react";

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
                <th># Airports</th> {/* ✅ new column */}
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
                        <td>{city.airports?.length ?? 0}</td> {/* ✅ airport count */}
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="5">No cities available</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default CityTable;
