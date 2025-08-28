import React from 'react';

export default function ArrivalsTable({ flights = [] }) {
    const hasData = Array.isArray(flights) && flights.length > 0;

    return (
        <table className="table table-sm table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Flight #</th>
                <th>Status</th>
                <th>Sched</th>
                <th>Actual</th>
                <th>From</th>
                <th>Gate</th>
                <th>Airline</th>
            </tr>
            </thead>
            <tbody>
            {hasData ? flights.map(f => (
                <tr key={f.id}>
                    <td>{f.id}</td>
                    <td>{f.flightNumber}</td>
                    <td>{f.status}</td>
                    <td>{f.scheduledTime?.slice(11,16) ?? '-'}</td>
                    <td>{f.actualTime?.slice(11,16) ?? '-'}</td>
                    <td>{f.originCode ?? '-'}</td>
                    <td>{f.gateId ?? '-'}</td>
                    <td>{f.airlineId ?? '-'}</td>
                </tr>
            )) : (
                <tr><td colSpan="8">No arrivals.</td></tr>
            )}
            </tbody>
        </table>
    );
}
