import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RecipientDetailsForm } from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { useAppContext } from "../../../constants";
import * as constants from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});

describe("RecipientDetailsForm", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setTransaction: jest.fn()
    }));
    render(
      <Router>
        <RecipientDetailsForm />
      </Router>
    );
  });

  test("renders form with input fields and checkbox", () => {
    const emailInput = screen.getByLabelText("Email");
    const accNumberInput = screen.getByLabelText("Account Number");
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const ifscInput = screen.getByLabelText("The Indian Financial System Code");

    expect(emailInput).toBeInTheDocument();
    expect(accNumberInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(ifscInput).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("updates form values on input change", () => {
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  });

  test("updates isKnown value on checkbox click", () => {
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
  });

  test("should update context on continue button click", () => {
    const setTransactionMock = jest.fn();
    (useAppContext as jest.Mock).mockReturnValue({
      setTransaction: setTransactionMock
    });

    fireEvent.click(screen.getByText(/Continue/i));
  });
  test("should select an option", async () => {
    const element1 = screen.getByTestId("select1");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => fireEvent.click(screen.getByText(/savings/i)));
    fireEvent.click(screen.getByText(/continue/i));
  });
  test("should enable continue button when form is valid", async () => {
    const continueButton = screen.getByText("Continue");
    const emailInput = screen.getByLabelText("Email");
    const accNumberInput = screen.getByLabelText("Account Number");
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const ifscInput = screen.getByLabelText("The Indian Financial System Code");
    fireEvent.change(emailInput, { target: { value: "example@example.com" } });
    fireEvent.change(accNumberInput, { target: { value: "1234567890" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(ifscInput, { target: { value: "1234567890" } });
    const element1 = screen.getByTestId("select1");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => fireEvent.click(screen.getByText(/checking/i)));
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(continueButton).toBeEnabled();
    fireEvent.click(continueButton);
  });
  test("should enable continue button when form is valid", async () => {
    const continueButton = screen.getByText("Continue");
    const emailInput = screen.getByLabelText("Email");
    const accNumberInput = screen.getByLabelText("Account Number");
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const ifscInput = screen.getByLabelText("The Indian Financial System Code");
    fireEvent.change(emailInput, { target: { value: "example@example.com" } });
    fireEvent.change(accNumberInput, { target: { value: "12345890" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(ifscInput, { target: { value: "12345890" } });
    const element1 = screen.getByTestId("select1");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => fireEvent.click(screen.getByText(/checking/i)));
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(continueButton).toBeEnabled();
    fireEvent.click(continueButton);
  });
  test("should enable continue button when form is valid", async () => {
    const continueButton = screen.getByText("Continue");
    const emailInput = screen.getByLabelText("Email");
    const accNumberInput = screen.getByLabelText("Account Number");
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const ifscInput = screen.getByLabelText("The Indian Financial System Code");
    fireEvent.change(emailInput, { target: { value: "example@example.com" } });
    fireEvent.change(accNumberInput, { target: { value: "1234589090" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(ifscInput, { target: { value: "123450" } });
    const element1 = screen.getByTestId("select1");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => fireEvent.click(screen.getByText(/checking/i)));
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(continueButton).toBeEnabled();
    fireEvent.click(continueButton);
  });
  test("checking for the email format", () => {
    const continueButton = screen.getByText("Continue");
    const emailInput = screen.getByLabelText("Email");
    const accNumberInput = screen.getByLabelText("Account Number");
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const ifscInput = screen.getByLabelText("The Indian Financial System Code");
    fireEvent.change(emailInput, { target: { value: "example@example" } });
    fireEvent.change(accNumberInput, { target: { value: "1234567" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(ifscInput, { target: { value: "ABC1209" } });
  });

  test("checking for the email format", () => {
    const continueButton = screen.getByText("Continue");
    const emailInput = screen.getByLabelText("Email");
    const accNumberInput = screen.getByLabelText("Account Number");
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const ifscInput = screen.getByLabelText("The Indian Financial System Code");
    fireEvent.change(emailInput, { target: { value: "example@example.com" } });
    fireEvent.change(accNumberInput, { target: { value: "123456" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(ifscInput, { target: { value: "ABC1209" } });
  });
  it("should update accNumber field if input length is <= 10", () => {
    const accNumberInput = screen.getByLabelText(
      "Account Number"
    ) as HTMLInputElement;
    fireEvent.change(accNumberInput, { target: { value: "1234567890" } });

  });

  it("should not update accNumber field if input length is > 10", () => {
    const accNumberInput = screen.getByLabelText(
      "Account Number"
    ) as HTMLInputElement;
    fireEvent.keyDown(accNumberInput)
    fireEvent.change(accNumberInput, {
      target: { value: "12345678901234567890" }
    });
 
  });

  it("should update ifsc field if input length is <= 10", () => {
    const ifscInput = screen.getByLabelText(
      "The Indian Financial System Code"
    ) as HTMLInputElement;
    fireEvent.change(ifscInput, { target: { value: "ABCD14" } });
    const accNumberInput = screen.getByLabelText(
      "Account Number"
    ) as HTMLInputElement;
    fireEvent.change(accNumberInput, { target: { value: "12345678" } });
  });

  it("should not update ifsc field if input length is > 10", () => {
    const ifscInput = screen.getByLabelText(
      "The Indian Financial System Code"
    ) as HTMLInputElement;
    fireEvent.change(ifscInput, { target: { value: "ABCD1234567890" } });

  });
  test("input validation", () => {
    const input = screen.getByLabelText("Account Number");
    fireEvent.keyDown(input)
    fireEvent.change(input, { target: { value: "1235e+-8772" } });
  });
  test("event.preventDefault() is called when invalid keys are pressed", () => {
   
    const input = screen.getByLabelText("Account Number")  as HTMLInputElement;
  
    fireEvent.keyDown(input, { key: "e" });
    fireEvent.keyDown(input, { key: "+" });
    fireEvent.keyDown(input, { key: "-" });
  
   
    expect(input.value).toBe(""); 
  });
});
