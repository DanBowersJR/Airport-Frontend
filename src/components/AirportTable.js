// src/pages/Airport.jsx
import React, { useEffect, useState } from "react";
import API_BASE_URL from "../api";

const Airport = () => {
    const [airports, setAirports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/airports`)
            .then((res) => res.json())
            .then((data) => {
                setAirports(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching airports:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-3">
            <h2>Airports</h2>
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
                {loading ? (
                    <tr>
                        <td colSpan="4">Loading...</td>
                    </tr>
                ) : airports.length > 0 ? (
                    airports.map((a) => (
                        <tr key={a.id ?? `airport-${a.code}`}>
                            <td>{a.id}</td>
                            <td>{a.code}</td>
                            <td>{a.name}</td>
                            <td>{a.city?.name || a.cityName || "—"}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No airports found.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Airport;
