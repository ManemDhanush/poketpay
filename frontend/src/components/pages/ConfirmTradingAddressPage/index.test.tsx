import React from "react";
import { render, screen } from "@testing-library/react";
import { ConfirmTradingAddressPage } from ".";
import { MemoryRouter as Router } from 'react-router-dom';
describe("ConfirmTradingAddressPage", () => {
  test("renders the component", () => {
    render(
      <Router>
        <ConfirmTradingAddressPage />
      </Router>
    );
    // render(<ConfirmTradingAddressPage />);
    expect(screen.getByText(/Confirm Trading Address/i)).toBeInTheDocument();
  });
});
