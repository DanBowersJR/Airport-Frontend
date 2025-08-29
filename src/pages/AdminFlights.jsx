// src/pages/AdminFlights.jsx
import React from "react";
import { useNavigate } from "react-router-dom";   // ✅ for navigation
import "bootstrap/dist/css/bootstrap.min.css";

const AdminFlights = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    {/* ✅ Top section with Back button */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="card-title mb-0">Manage Flights</h2>
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => navigate("/admin")}
                        >
                            ← Back to Dashboard
                        </button>
                    </div>

                    <p className="text-muted mb-4">
                        Here you will be able to <strong>add, update, or delete</strong> flights.
                    </p>

                    <div className="alert alert-info">
                        ✈️ Flight management tools will be added here in the future.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminFlights;
