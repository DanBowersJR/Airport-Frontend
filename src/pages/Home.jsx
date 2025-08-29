// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "70vh",
                textAlign: "center",
                color: "#1e3a8a", // deep blue
            }}
        >
            {/* Fade-in animation */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ fontSize: "3rem", fontWeight: "bold" }}
            >
                Welcome to <span style={{ color: "#2563eb" }}>FlightGrid</span>!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ fontSize: "1.25rem", marginTop: "1rem", maxWidth: "600px" }}
            >
                ✈️ Simplifying travel with real-time flight updates, arrivals, departures, and more.
            </motion.p>
        </div>
    );
};

export default Home;
