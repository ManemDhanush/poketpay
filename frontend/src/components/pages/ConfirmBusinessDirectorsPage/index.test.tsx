import { render,screen,fireEvent } from "@testing-library/react";
import ConfirmBusinessDirectorsPage from ".";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";

describe("ConfirmBusinessDirectorsPage", () => {
  it("render without errors", () => {
    render(
      <Router>
        <ConfirmBusinessDirectorsPage />
      </Router>
    );
  });
  it('should navigate to business owner page when button is clicked', () => {
    render(
      <Router>
        <ConfirmBusinessDirectorsPage />
      </Router>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    fireEvent.click(screen.getByTestId("back"))
  });
});
