// src/pages/AdminArrivals.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminArrivals = () => {
    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Manage Arrivals & Departures</h2>
                    <p className="text-muted mb-4">
                        Here you will be able to manage <strong>arrivals and departures</strong> for airports.
                    </p>

                    <div className="alert alert-info">
                        🛬 Arrival & Departure management tools will be added here in the future.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminArrivals;
