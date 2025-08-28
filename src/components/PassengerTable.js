// src/components/PassengerTable.js
import React from "react";

const PassengerTable = ({ passengers = [] }) => {
    const hasData = Array.isArray(passengers) && passengers.length > 0;

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
            {hasData ? (
                passengers.map((p) => (
                    <tr key={p.id ?? `passenger-${p.firstName}-${p.lastName}`}>
                        <td>{p.id}</td>
                        <td>{p.firstName || "—"}</td>
                        <td>{p.lastName || "—"}</td>
                        <td>{p.phoneNumber || "—"}</td>
                        <td>{p.city?.name || "—"}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="5" className="text-center">
                        No passengers available
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default PassengerTable;
