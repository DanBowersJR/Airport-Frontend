// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BrandDot = () => (
    <span
        className="me-2"
        style={{
            width: 16,
            height: 16,
            background: "#000", // Black dot for visibility
            borderRadius: "50%",
            display: "inline-block",
        }}
    />
);

const Navbar = () => {
    return (
        <nav
            className="navbar shadow-sm sticky-top mb-3"
            style={{
                background: "linear-gradient(90deg, #1e3a8a, #2563eb, #3b82f6)",
                padding: "0.8rem 1.5rem",
            }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Brand */}
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <BrandDot />
                    <span
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: "700",
                            fontSize: "1.9rem",
                            color: "#fff",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                            letterSpacing: "0.5px",
                        }}
                    >
                        FlightGrid
                    </span>
                </NavLink>

                {/* Navigation */}
                <div className="d-flex">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/cities", label: "Cities" },
                        { to: "/airports", label: "Airports" },
                        { to: "/arrivals", label: "Arrivals" },
                        { to: "/departures", label: "Departures" },
                    ].map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                "fw-semibold mx-2 " +
                                (isActive ? "active-btn" : "inactive-btn")
                            }
                            style={({ isActive }) => ({
                                background: isActive ? "#000" : "#fff", // active = black background
                                color: isActive ? "#fff" : "#1e3a8a",   // text stays white on black
                                borderRadius: "20px",
                                padding: "6px 16px",
                                textDecoration: "none",
                                fontSize: "1rem",
                                fontWeight: "600",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                                transition: "all 0.25s ease-in-out",
                            })}
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
