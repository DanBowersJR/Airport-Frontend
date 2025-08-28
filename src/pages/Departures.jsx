// src/pages/Departures.jsx
import React, { useEffect, useState } from "react";
import DeparturesTable from "../components/DeparturesTable";
import API_BASE_URL from "../api";

const Departures = () => {
    const [flights, setFlights] = useState([]);
    const [airports, setAirports] = useState([]);
    const [selectedAirportId, setSelectedAirportId] = useState("");
    const [loading, setLoading] = useState(true);

    // Load airports when page mounts
    useEffect(() => {
        fetch(`${API_BASE_URL}/api/airports`)
            .then((res) => res.json())
            .then((data) => {
                setAirports(data);
                if (data.length > 0) {
                    setSelectedAirportId(data[0].id); // default first airport
                }
            })
            .catch((err) => console.error("Error fetching airports:", err));
    }, []);

    // Load departures whenever airport changes
    useEffect(() => {
        if (!selectedAirportId) return;

        setLoading(true);
        fetch(`${API_BASE_URL}/api/flights/departures?airportId=${selectedAirportId}`)
            .then((res) => res.json())
            .then((data) => {
                setFlights(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching departures:", err);
                setLoading(false);
            });
    }, [selectedAirportId]);

    return (
        <div className="container mt-4">
            <h2>Departures</h2>

            {/* Dropdown for airport selection */}
            <div className="mb-3">
                <label htmlFor="airport-select" className="form-label">Select Airport:</label>
                <select
                    id="airport-select"
                    className="form-select w-auto"
                    value={selectedAirportId}
                    onChange={(e) => setSelectedAirportId(e.target.value)}
                >
                    {airports.map((a) => (
                        <option key={a.id} value={a.id}>
                            {a.code} — {a.name}
                        </option>
                    ))}
                </select>
            </div>

            {loading ? <p>Loading departures...</p> : <DeparturesTable flights={flights} />}
        </div>
    );
};

export default Departures;
