// src/pages/City.jsx
import React, { useEffect, useState } from "react";
import API_BASE_URL from "../api";
import CityTable from "../components/CityTable"; // ✅ reuse component

const City = () => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/cities`)
            .then((res) => res.json())
            .then((data) => {
                setCities(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching cities:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-3">
            <h2>Cities</h2>
            {loading ? (
                <p>Loading cities...</p>
            ) : (
                <CityTable cities={cities} />
            )}
        </div>
    );
};

export default City;
