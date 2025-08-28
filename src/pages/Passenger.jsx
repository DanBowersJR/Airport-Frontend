// src/pages/Passenger.jsx
import React, { useEffect, useState } from "react";
import PassengerTable from "../components/PassengerTable";
import API_BASE_URL from "../api";

const Passenger = () => {
    const [passengers, setPassengers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/passengers`)
            .then((res) => res.json())
            .then((data) => {
                setPassengers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching passengers:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Passengers</h2>
            {loading ? <p>Loading passengers...</p> : <PassengerTable passengers={passengers} />}
        </div>
    );
};

export default Passenger;
