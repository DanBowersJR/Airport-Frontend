// src/components/Navbar.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    test("shows FlightGrid brand", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/FlightGrid/i)).toBeInTheDocument();
    });

    test("has Home link", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });

    test("has Cities link", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    });

    test("has Airports link", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/Airports/i)).toBeInTheDocument();
    });

    test("has Arrivals link", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/Arrivals/i)).toBeInTheDocument();
    });

    test("has Departures link", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/Departures/i)).toBeInTheDocument();
    });
});
