import React from "react";
import { render, screen } from "@testing-library/react";
import AirportTable from "./AirportTable";

describe("AirportTable Component", () => {
    test("renders Airports header", () => {
        render(<AirportTable airports={[]} />);
        // Find specifically by role and name
        const header = screen.getByText(/Airports/i, { selector: "div" });
        expect(header).toBeInTheDocument();
    });

    test("renders table even when no airports", () => {
        render(<AirportTable airports={[]} />);
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByText(/No airports available/i)).toBeInTheDocument();
    });
});
