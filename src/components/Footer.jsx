// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-light text-center py-3 mt-auto border-top">
            <small className="text-muted">
                &copy; {new Date().getFullYear()} <strong>FlightGrid</strong> — All rights reserved. ·{" "}
                <Link
                    to="/admin-login"   // ✅ now goes to login first
                    className="text-decoration-none text-secondary"
                    style={{ transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                    Admin
                </Link>
            </small>
        </footer>
    );
};

export default Footer;
