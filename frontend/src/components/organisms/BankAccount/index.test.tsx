import { screen, fireEvent } from "@testing-library/react";
import BankAccount from ".";
import { BankAccountProps } from "./BankAccountUtils";
import { render } from "../../../test-setup";

describe("BankAccount", () => {
  const defaultProps: BankAccountProps = {
    bankAccountType: "Checking Account",
    currencyValue: "USD"
  };

  test('handles onClick event for "Continue to Pay" button', () => {
    render(<BankAccount {...defaultProps} />);

    const button = screen.getByRole("button", { name: "Continue to pay" });
    fireEvent.click(button);
  });

  test('handles onClick event for "Pay manually" button', () => {
    render(<BankAccount {...defaultProps} />);

    const button = screen.getByRole("button", { name: "Pay manually" });
    fireEvent.click(button);
  });
});
