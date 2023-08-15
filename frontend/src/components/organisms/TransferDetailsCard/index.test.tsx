import { render, fireEvent, screen } from "@testing-library/react";
import { TransferDetailsCard } from ".";
import { TRANSFER_DETAILS } from "./transferDetailsTextConstants";
import { BrowserRouter as Router } from "react-router-dom";
import * as constants from "../../../constants";
import { MOCK_TRANSACTION } from "../../pages/LandingPage/landingPageConstants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});
describe("Transfer details card", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setTransaction: jest.fn()
    }));
    render(
      <Router>
        <TransferDetailsCard />
      </Router>
    );
  });
  test("should render title", () => {
    const title = screen.getByText(TRANSFER_DETAILS.title);
    expect(title).toBeInTheDocument();
  });
  test("should display dropdown", () => {
    const dropdown = screen.getAllByTestId("open-dropdown");
    expect(dropdown).toHaveLength(2);
    fireEvent.click(dropdown[0]);
  });
  test("handles input change correctly", () => {
    const youSendInput = screen.getByLabelText(TRANSFER_DETAILS.labels[0]);
    const recipientGetsInput = screen.getByLabelText(
      TRANSFER_DETAILS.labels[1]
    );

    fireEvent.change(youSendInput, { target: { value: "100" } });
    fireEvent.change(recipientGetsInput, { target: { value: "95" } });
  });
  test("dropdown functionality", () => {
    const dropdown = screen.getAllByTestId(/open-dropdown/i);
    expect(dropdown).toHaveLength(2);
    fireEvent.click(dropdown[0]);

    const businessOption = screen.getByText(/india/i);
    fireEvent.click(businessOption);
  });
  test("should update context on continue button click", () => {
    jest.mock("../../../constants", () => ({
      useAppContext: jest.fn().mockReturnValue({
        transaction: MOCK_TRANSACTION,
        setTransaction: jest.fn()
      })
    }));
    const youSendInput = screen.getByLabelText(TRANSFER_DETAILS.labels[0]);
    const recipientGetsInput = screen.getByLabelText(
      TRANSFER_DETAILS.labels[1]
    );

    fireEvent.change(youSendInput, { target: { value: "100" } });
    fireEvent.change(recipientGetsInput, { target: { value: "95" } });

    fireEvent.click(screen.getByText(/Continue/i));
  });
});
