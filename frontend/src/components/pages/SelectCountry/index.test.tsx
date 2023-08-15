import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectCountry from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("SelectCountry", () => {
  beforeEach(() => {
    render(
      <Router>
        <SelectCountry />
      </Router>
    );
  });
  test("renders without errors", () => {
    const textElement = screen.getByText("Your country of registration");
    expect(textElement).toBeInTheDocument();
  });
  it('should navigate to "/choose-account-type" when button is clicked', () => {
    const button = screen.getByTestId("back");
    fireEvent.click(button);
  });
  it('should navigate to "/two-factor-auth" when button is clicked', () => {
    const button = screen.getByText("Continue");
    fireEvent.click(button);
  });

  test("should select an option", async () => {
    const element1 = screen.getByTestId("select1");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => screen.getByText(/india/i));
    fireEvent.click(screen.getByText(/united kingdom/i));
    const button = screen.getByText("Continue");
    fireEvent.click(button);
  });

  test("should not select an disabled option", async () => {
    const element1 = screen.getByTestId("select1");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => screen.getByText(/india/i));
    fireEvent.click(screen.getByText(/india/i));
    const button = screen.getByText("Continue");
    fireEvent.click(button);
  });
});
