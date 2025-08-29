import React from "react";
import { render, screen } from "@testing-library/react";
import CityTable from "./CityTable";

describe("CityTable Component", () => {
    test("renders Cities header", () => {
        render(<CityTable cities={[]} />);
        // Use exact match for header text
        expect(screen.getByText("🌆 Cities")).toBeInTheDocument();
    });

    test("renders table even when no cities", () => {
        render(<CityTable cities={[]} />);
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByText(/No cities available/i)).toBeInTheDocument();
    });
});
