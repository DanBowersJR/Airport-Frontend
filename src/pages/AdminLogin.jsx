// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === "daniel1234") {
            navigate("/admin"); // ✅ go to Admin dashboard
        } else {
            setError("Wrong password. Please try again.");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title mb-3">Admin Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
