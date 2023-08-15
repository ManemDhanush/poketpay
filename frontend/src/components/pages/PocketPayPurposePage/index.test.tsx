import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PocketPayPurposePage from ".";
import { useAppContext } from "../../../constants";
import * as constants from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});

describe("PocketPayPurposePage", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setTransaction: jest.fn()
    }));
  });
  it("render without errors", () => {
    const { container } = render(
      <MemoryRouter>
        <PocketPayPurposePage />
      </MemoryRouter>
    );
  });
  test("calls the handleConfirmFn when the 'Continue' button is clicked", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PocketPayPurposePage />
      </MemoryRouter>
    );

    const continueButton = getByText(/Continue/i);
    fireEvent.click(continueButton);
  });
  it('should navigate to "/your-details" when button is clicked', () => {
    render(
      <MemoryRouter>
        <PocketPayPurposePage />
      </MemoryRouter>
    );
    const button = screen.getByTestId("back");
    fireEvent.click(button);
  });
  it("should update the dropdown", async () => {
    render(
      <MemoryRouter>
        <PocketPayPurposePage />
      </MemoryRouter>
    );
    const element1 = screen.getByTestId("dropdown");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => fireEvent.click(screen.getByText(/paying rent/i)));
  });
});
