// src/pages/Admin.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // ✅ Redirects back to homepage
        navigate("/");
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="card-title">Admin Dashboard</h2>
                        <button
                            onClick={handleLogout}
                            className="btn btn-sm btn-outline-danger"
                        >
                            Logout
                        </button>
                    </div>

                    <p className="text-muted mb-4">
                        Manage flights, airports, and passengers from this panel.
                    </p>

                    <div className="list-group">
                        <button
                            className="list-group-item list-group-item-action"
                            onClick={() => navigate("/admin/flights")}
                        >
                            ➕ Manage Flights
                        </button>
                        <button
                            className="list-group-item list-group-item-action"
                            onClick={() => navigate("/admin/arrivals")}
                        >
                            🛬 Manage Arrivals & Departures
                        </button>
                        <button
                            className="list-group-item list-group-item-action"
                            onClick={() => navigate("/admin/airports")}
                        >
                            ✈️ Manage Airports
                        </button>
                        <button
                            className="list-group-item list-group-item-action"
                            onClick={() => navigate("/admin/passengers")}
                        >
                            👥 Manage Passengers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
