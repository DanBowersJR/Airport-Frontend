// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (public)
import Home from "./pages/Home";   // ✅ NEW
import City from "./pages/City";
import Airport from "./pages/Airport";
import Arrivals from "./pages/Arrivals";
import Departures from "./pages/Departures";

// Pages (admin)
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminFlights from "./pages/AdminFlights";
import AdminArrivals from "./pages/AdminArrivals";
import AdminAirports from "./pages/AdminAirports";
import AdminPassengers from "./pages/AdminPassengers";

const App = () => {
    return (
        <Router>
            <div className="App d-flex flex-column min-vh-100">
                <Navbar />

                {/* Main content */}
                <div className="flex-grow-1 p-3">
                    <Routes>
                        {/* Public routes */}
                        <Route path="/" element={<Home />} />   {/* ✅ Updated */}
                        <Route path="/cities" element={<City />} />
                        <Route path="/airports" element={<Airport />} />
                        <Route path="/arrivals" element={<Arrivals />} />
                        <Route path="/departures" element={<Departures />} />

                        {/* Admin workflow */}
                        <Route path="/admin-login" element={<AdminLogin />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/admin/flights" element={<AdminFlights />} />
                        <Route path="/admin/arrivals" element={<AdminArrivals />} />
                        <Route path="/admin/airports" element={<AdminAirports />} />
                        <Route path="/admin/passengers" element={<AdminPassengers />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
