// src/pages/City.jsx
import React, { useEffect, useState } from "react";
import API_BASE_URL from "../api";

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
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>State</th>
                    <th>Population</th>
                </tr>
                </thead>
                <tbody>
                {loading ? (
                    <tr>
                        <td colSpan="4">Loading...</td>
                    </tr>
                ) : cities.length > 0 ? (
                    cities.map((c) => (
                        <tr key={c.id ?? `city-${c.name}`}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.state}</td>
                            <td>{c.population}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No cities found.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default City;
