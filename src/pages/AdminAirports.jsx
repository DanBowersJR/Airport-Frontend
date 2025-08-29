// src/pages/AdminAirports.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminAirports = () => {
    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Manage Airports</h2>
                    <p className="text-muted mb-4">
                        Here you will be able to <strong>add, update, or delete airports</strong> in the system.
                    </p>

                    <div className="alert alert-info">
                        ✈️ Airport management tools will be added here in the future.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAirports;
