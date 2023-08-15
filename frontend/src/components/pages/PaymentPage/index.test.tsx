import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { PaymentPage } from ".";
import { render } from "../../../test-setup";
import { BANK_TRANSFER, CARDTEXT } from "../../../constants";

describe("payment page", () => {
  test("should display next page by clicking continue button", () => {
    render(<PaymentPage />);
    const continueBtn = screen.getByText(/continue/i);
    fireEvent.click(continueBtn);
  });
  test("should display before page by clicking continue button", () => {
    render(<PaymentPage />);
    const debitCardRadio = screen.getByText(CARDTEXT);
    fireEvent.click(debitCardRadio);
    const continueBtn = screen.getByText(/continue/i);
    fireEvent.click(continueBtn);
    fireEvent.click(continueBtn);
    const backBtn = screen.getByTestId(/back1/i);
    fireEvent.click(backBtn);
  });
  test("should select transfer bank option ", () => {
    render(<PaymentPage />);
    const transferRadio = screen.getByText(BANK_TRANSFER);
    fireEvent.click(transferRadio);
    const continueBtn = screen.getByText(/continue/i);
    fireEvent.click(continueBtn);
  });
  test("should select the debit card", () => {
    render(<PaymentPage />);
    const debitCardRadio = screen.getByText(CARDTEXT);
    fireEvent.click(debitCardRadio);
    const continueBtn = screen.getByText(/continue/i);
    fireEvent.click(continueBtn);
  });

  test("should navigate to previous page", () => {
    render(<PaymentPage />);
    const debitCardRadio = screen.getByText(CARDTEXT);
    fireEvent.click(debitCardRadio);
    const backBtn = screen.getByAltText("Back1");
    fireEvent.click(backBtn);
  });

  test("should complete transaction", () => {
    render(<PaymentPage />);
    const debitCardRadio = screen.getByText(CARDTEXT);
    fireEvent.click(debitCardRadio);
    const continueBtn = screen.getByText(/continue/i);
    fireEvent.click(continueBtn);
    const radioButtons = screen.getAllByRole("radio") as HTMLInputElement[];
    fireEvent.click(radioButtons[0]);
    const cardInput = screen.getAllByLabelText(
      "CVV / CVC"
    ) as HTMLInputElement[];
    fireEvent.change(cardInput[0], { target: { value: "123" } });
    fireEvent.click(continueBtn);
  });
});
