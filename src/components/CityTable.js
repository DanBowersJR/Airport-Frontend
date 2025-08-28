import React from 'react';

const CityTable = ({ cities = [] }) => {
    const hasData = Array.isArray(cities) && cities.length > 0;

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>State/Province</th>
                <th>Population</th>
            </tr>
            </thead>
            <tbody>
            {hasData ? (
                cities.map((city) => (
                    <tr key={city.id ?? `city-${city.name}`}>
                        <td>{city.id}</td>
                        <td>{city.name}</td>
                        <td>{city.state}</td>
                        <td>{city.population}</td>
                    </tr>
                ))
            ) : (
                <tr><td colSpan="4">Loading...</td></tr>
            )}
            </tbody>
        </table>
    );
};

export default CityTable;
