✈️ FlightGrid Frontend
Welcome to the FlightGrid Frontend — the React-based client for the FlightGrid project. This app connects to the backend API to display real-time airport, city, passenger, and flight data in a clean UI.
🚀 Tech Stack
- React 18
- React Router v6
- Bootstrap 5 (styling + components)
- Jest & React Testing Library (unit tests)
- Axios (API calls)
⚙️ Setup & Installation
1. Clone the repo
git clone https://github.com/your-username/airport-frontend.git
cd airport-frontend
2. Install dependencies
npm install
3. Run the app
Make sure your backend is running on http://localhost:8080, then start the frontend:
npm start

Runs on http://localhost:3000
🧪 Running Tests
We wrote unit tests for all major components. Run them with:
npm test -- --watchAll
You should see all green tests if your backend is running and data is seeded correctly.
📂 Project Structure
src/
 ├── components/
 │   ├── CityTable.js / CityTable.test.js
 │   ├── AirportTable.js / AirportTable.test.js
 │   ├── PassengerTable.js / PassengerTable.test.js
 │   ├── ArrivalsTable.js / ArrivalsTable.test.js
 │   ├── DeparturesTable.js / DeparturesTable.test.js
 │   ├── Navbar.jsx / Navbar.test.js
 │   └── Footer.jsx
 ├── pages/
 │   └── (extra routed pages)
 ├── App.js / App.test.js
 ├── api.js (Axios API helpers)
 └── setupTests.js
🔗 Backend API
This frontend expects the backend running at:

http://localhost:8080

Backend repo: https://github.com/your-username/airport-backend

Endpoints include:
- /cities
- /airports
- /passengers
- /flights
- /departures
- /arrivals
👨‍💻 Developer Notes
- Built during the Software Design, Architecture & Testing sprint.
- Frontend and backend are separate repos — this repo only handles the UI.
- Docker is only needed for the backend; frontend runs on local Node.js.
- Tests are clean and minimal — just enough to prove component rendering and API integration.
📜 License
MIT — free to use, learn, and remix.
Built with ❤️ as part of the FlightGrid project.
<img width="432" height="640" alt="image" src="https://github.com/user-attachments/assets/fb5cff90-ed87-48c8-9947-292ee2f8b38a" />
