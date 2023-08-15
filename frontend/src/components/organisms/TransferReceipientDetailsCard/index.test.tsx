import { render, screen, fireEvent } from "@testing-library/react";
import TransferRecipientDetailsCard from ".";
import { TransferRecpDetailsCardProps } from "./TransferReceipientDetailsCardUtils";
import { Router, MemoryRouter } from "react-router-dom";

describe("TransferRecipientDetailsCard", () => {
  const mockData: TransferRecpDetailsCardProps = {
    data: {
      fee: "00.00GBP",
      amount: "77.74 GBP",
      rate: "1GBP = 1.14 EUR",
      name: "Mario Gabriel",
      email: "mario@gmail.com",
      accountno: "365314322223",
      bankAccountType: "Checking",
      sendcurrency: "100.00 GBP",
      getcurrency: "114.68 EUR"
    }
  };

  it("renders TransferDetailsCard component correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        {" "}
        <TransferRecipientDetailsCard {...mockData} />
      </MemoryRouter>
    );

    expect(getByText("Fee:")).toBeInTheDocument();
    expect(getByText("00.00GBP")).toBeInTheDocument();

    expect(getByText("Amount we’ll convert:")).toBeInTheDocument();
    expect(getByText("77.74 GBP")).toBeInTheDocument();

    expect(getByText("Guranteed rate:")).toBeInTheDocument();
    expect(getByText("1GBP = 1.14 EUR")).toBeInTheDocument();
  });

  test('handles onClick event for "Continue to Pay" button', () => {
    render(
      <MemoryRouter>
        <TransferRecipientDetailsCard {...mockData} />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Continue to Pay" });
    fireEvent.click(button);
  });

  test('handles onClick event for "Cancel this transfer" button', () => {
    render(
      <MemoryRouter>
        <TransferRecipientDetailsCard {...mockData} />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Cancel this transfer" });
    fireEvent.click(button);
  });
});
