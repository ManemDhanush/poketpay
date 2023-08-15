import { render, screen, fireEvent } from "@testing-library/react";
import { PayWithCard } from ".";

describe("PayWithCard", () => {
  test("renders the component", () => {
    render(<PayWithCard handleEnable={jest.fn} />);

    const titleElement = screen.getByText("Pay with your card");
    expect(titleElement).toBeInTheDocument();

    const savedCardTab = screen.getByText("SAVED CARD");
    expect(savedCardTab).toBeInTheDocument();
  });
  it("should select the correct card when radio button is clicked", () => {
    render(<PayWithCard handleEnable={jest.fn} />);

    const radioButtons = screen.getAllByRole("radio") as HTMLInputElement[];

    expect(radioButtons[0].checked).toBe(false);

    fireEvent.click(radioButtons[0]);

    expect(radioButtons[0].checked).toBe(true);
    expect(radioButtons[1].checked).toBe(false);
  });
  test("should update card number input field correctly", () => {
    render(<PayWithCard handleEnable={jest.fn} />);
    const radioButtons = screen.getAllByRole("radio") as HTMLInputElement[];
    fireEvent.click(radioButtons[0]);
    const cardInput = screen.getAllByLabelText(
      "CVV / CVC"
    ) as HTMLInputElement[];
    fireEvent.change(cardInput[0], { target: { value: "123" } });
  });
  test("should update card number", () => {
    render(<PayWithCard handleEnable={jest.fn} />);
    const radioButtons = screen.getAllByRole("radio") as HTMLInputElement[];
    fireEvent.click(radioButtons[0]);
    const cardInput = screen.getAllByLabelText(
      "CVV / CVC"
    ) as HTMLInputElement[];
    fireEvent.change(cardInput[0], { target: { value: "12" } });
  });
});
