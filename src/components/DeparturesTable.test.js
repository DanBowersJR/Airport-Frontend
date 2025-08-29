import React from "react";
import { render, screen } from "@testing-library/react";
import DeparturesTable from "./DeparturesTable";

describe("DeparturesTable Component", () => {
    test("renders Departures header", () => {
        render(<DeparturesTable departures={[]} />);
        const header = screen.getByText((content) => content.includes("Departures"));
        expect(header).toBeInTheDocument();
    });

    test("renders table even when no departures", () => {
        render(<DeparturesTable departures={[]} />);
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByText(/No departures available/i)).toBeInTheDocument();
    });
});
