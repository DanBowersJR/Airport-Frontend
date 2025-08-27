import React, { Component } from 'react';
import Table from './components/Table.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

// 👇 centralize base URL
import API_BASE_URL from './api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        };
    }

    componentDidMount() {
        fetch(`${API_BASE_URL}/api/cities`)
            .then((res) => res.json())
            .then((cities) => this.setState({ cities }))
            .catch((err) => console.error('Error fetching cities:', err));
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="./">
                        <img src={logo} alt="logo" width="40" /> City List
                    </a>
                </nav>
                <Table cities={this.state.cities} />
            </div>
        );
    }
}

export default App;
