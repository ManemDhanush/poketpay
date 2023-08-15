import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TransferTypeCard } from ".";
import { BANK_TRANSFER, CARDTEXT } from "../../../constants";

describe("TransferTypeCard component", () => {
  test("should select the debit card radio button when clicked", () => {
    render(<TransferTypeCard handleRadioChange={jest.fn} />);
    const card = screen.getByRole("radio", {
      name: /image not found transfer from your bank account transfer the money using bank account should arrive by january 28th\./i
    });
    fireEvent.change(card, { target: { value: "abc" } });
    fireEvent.click(card);

    const debitCard = screen.getByRole("radio", {
      name: /image not found debit card send from your visa or mastercard\. should arrive by january 28th\./i
    });
    fireEvent.change(debitCard, { target: { value: "abc" } });
    fireEvent.click(debitCard);
  });
  test("should select radio card", () => {
    render(<TransferTypeCard handleRadioChange={jest.fn} />);
    const debitCard = screen.getByText(/debit card/i);
    expect(debitCard).toBeInTheDocument();
    fireEvent.click(debitCard);

    const transferBankAccount = screen.getByText(
      /transfer from your bank account/i
    );
    expect(transferBankAccount).toBeInTheDocument();
    fireEvent.click(transferBankAccount);
  });
});
