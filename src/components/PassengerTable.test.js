import React from "react";
import { render, screen } from "@testing-library/react";
import PassengerTable from "./PassengerTable";

describe("PassengerTable Component", () => {
    test("renders table headers correctly", () => {
        render(<PassengerTable passengers={[]} />);

        expect(screen.getByText("Id")).toBeInTheDocument();
        expect(screen.getByText("First Name")).toBeInTheDocument();
        expect(screen.getByText("Last Name")).toBeInTheDocument();
        expect(screen.getByText("Phone")).toBeInTheDocument();
        expect(screen.getByText("City")).toBeInTheDocument();
    });

    test("renders table even when no passengers", () => {
        render(<PassengerTable passengers={[]} />);
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByText(/No passengers available/i)).toBeInTheDocument();
    });
});
