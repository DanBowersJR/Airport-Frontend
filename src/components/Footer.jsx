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
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                {/* Copyright */}
                <p
                    className="mb-0"
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

                {/* Social Media Icons */}
                <div className="d-flex align-items-center gap-3">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i
                            className="bi bi-twitter"
                            style={{
                                fontSize: "1.3rem",
                                color: "#fff",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
                            onMouseLeave={(e) => (e.target.style.color = "#fff")}
                        />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i
                            className="bi bi-instagram"
                            style={{
                                fontSize: "1.3rem",
                                color: "#fff",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "#E1306C")}
                            onMouseLeave={(e) => (e.target.style.color = "#fff")}
                        />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <i
                            className="bi bi-github"
                            style={{
                                fontSize: "1.3rem",
                                color: "#fff",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "#333")}
                            onMouseLeave={(e) => (e.target.style.color = "#fff")}
                        />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i
                            className="bi bi-linkedin"
                            style={{
                                fontSize: "1.3rem",
                                color: "#fff",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "#0077B5")}
                            onMouseLeave={(e) => (e.target.style.color = "#fff")}
                        />
                    </a>
                </div>

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
