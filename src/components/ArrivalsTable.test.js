import React from "react";
import { render, screen } from "@testing-library/react";
import ArrivalsTable from "./ArrivalsTable";

describe("ArrivalsTable Component", () => {
    test("renders Arrivals header", () => {
        render(<ArrivalsTable arrivals={[]} />);
        // Match text anywhere (including inside <span>)
        const header = screen.getByText((content) => content.includes("Arrivals"));
        expect(header).toBeInTheDocument();
    });

    test("renders table even when no arrivals", () => {
        render(<ArrivalsTable arrivals={[]} />);
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByText(/No arrivals available/i)).toBeInTheDocument();
    });
});
