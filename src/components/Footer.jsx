// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="shadow-sm"
            style={{
                background: "linear-gradient(90deg, #1e3a8a, #2563eb, #3b82f6)",
                padding: "0.8rem 1.5rem",   // ✅ matches navbar padding
                minHeight: "70px",          // ✅ same thickness as navbar
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {/* Copyright */}
                <p
                    className="mb-0 me-3"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1rem",
                        fontWeight: "500",
                        color: "#fff",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                    }}
                >
                    © {new Date().getFullYear()} <strong>FlightGrid</strong> — All rights reserved.
                </p>

                {/* Admin Panel button */}
                <NavLink
                    to="/admin-login"
                    className="btn fw-semibold"
                    style={{
                        background: "#fff",
                        color: "#1e3a8a",
                        borderRadius: "20px",
                        padding: "6px 16px",
                        textDecoration: "none",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                        transition: "all 0.25s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.08)";
                        e.target.style.background = "#f1f5f9";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.background = "#fff";
                    }}
                >
                    Admin Panel
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;
