import { render, screen } from "@testing-library/react";
import { BusinessActivity } from ".";
import { MemoryRouter as Router } from "react-router-dom";
describe("Business Activity Component", () => {
  test("test for the component if it is rendering correctly or not", () => {
    render(
      <Router>
        <BusinessActivity />
      </Router>
    );
    const textElement = screen.getByTestId("textId");
    expect(textElement).toBeInTheDocument();
  });
});
