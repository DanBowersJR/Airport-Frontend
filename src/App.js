// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

// Pages
import City from "./pages/City";
import Airport from "./pages/Airport";
import Arrivals from "./pages/Arrivals";
import Departures from "./pages/Departures";
import Passenger from "./pages/Passenger";   // ✅ new

const App = () => {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-light bg-light px-3">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" width="40" /> Airport Demo
                    </Link>
                    <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-primary" to="/cities">
                            Cities
                        </Link>
                        <Link className="btn btn-sm btn-outline-primary" to="/airports">
                            Airports
                        </Link>
                        <Link className="btn btn-sm btn-outline-success" to="/arrivals">
                            Arrivals
                        </Link>
                        <Link className="btn btn-sm btn-outline-success" to="/departures">
                            Departures
                        </Link>
                        <Link className="btn btn-sm btn-outline-warning" to="/passengers">
                            Passengers
                        </Link>
                    </div>
                </nav>

                <div className="p-3">
                    <Routes>
                        <Route path="/" element={<h2>Welcome to Airport Demo</h2>} />
                        <Route path="/cities" element={<City />} />
                        <Route path="/airports" element={<Airport />} />
                        <Route path="/arrivals" element={<Arrivals />} />
                        <Route path="/departures" element={<Departures />} />
                        <Route path="/passengers" element={<Passenger />} /> {/* ✅ new */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
