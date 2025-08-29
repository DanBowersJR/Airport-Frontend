// src/components/AirportTable.js
import React from "react";

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
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Id</th>
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
                    <td colSpan="4" className="text-center">
                        No airports available
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default AirportTable;
