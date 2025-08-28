// src/pages/Airport.jsx
import React, { useEffect, useState } from "react";
import AirportTable from "../components/AirportTable";
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
            {loading ? <p>Loading...</p> : <AirportTable airports={airports} />}
        </div>
    );
};

export default Airport;
