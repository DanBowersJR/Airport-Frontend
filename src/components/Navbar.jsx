// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";   // ✅ NavLink for active highlighting
import "bootstrap/dist/css/bootstrap.min.css";

const BrandDot = () => (
    <span
        className="me-2"
        style={{
            width: 14,
            height: 14,
            background: "#2563eb",
            borderRadius: 4,
            display: "inline-block"
        }}
    />
);

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light shadow-sm sticky-top mb-3">
            <div className="container-fluid px-3">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <BrandDot />
                    <span className="fw-bold">FlightGrid</span>
                </NavLink>

                <div className="btn-group">
                    <NavLink
                        className={({ isActive }) =>
                            "btn btn-sm btn-outline-primary" + (isActive ? " active" : "")
                        }
                        to="/cities"
                    >
                        Cities
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            "btn btn-sm btn-outline-primary" + (isActive ? " active" : "")
                        }
                        to="/airports"
                    >
                        Airports
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            "btn btn-sm btn-outline-success" + (isActive ? " active" : "")
                        }
                        to="/arrivals"
                    >
                        Arrivals
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            "btn btn-sm btn-outline-success" + (isActive ? " active" : "")
                        }
                        to="/departures"
                    >
                        Departures
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
