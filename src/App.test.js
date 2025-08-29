import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome headline', () => {
    render(<App />);
    // Target the <h1> specifically
    const headline = screen.getByRole('heading', { level: 1, name: /Welcome to FlightGrid/i });
    expect(headline).toBeInTheDocument();
});
