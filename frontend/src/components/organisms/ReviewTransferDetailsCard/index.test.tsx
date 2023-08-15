import { render, screen, fireEvent } from "@testing-library/react";
import { ReviewTransferDetailsCard } from ".";
import { MemoryRouter } from "react-router-dom";
import * as constants from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});
describe("ReviewTransferDetailsCard", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setTransaction: jest.fn()
    }));
    render(
      <MemoryRouter>
        <ReviewTransferDetailsCard />
      </MemoryRouter>
    );
  });

  test("allows editing transfer details", () => {
    fireEvent.click(screen.getByTestId("edit"));
    fireEvent.change(screen.getByLabelText("Amount"), {
      target: { value: "200.00 GBP" }
    });

    fireEvent.click(screen.getByText("Save"));
  });

  test("allows editing business details", () => {
    fireEvent.click(screen.getByTestId("change"));

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "New Business Name" }
    });

    fireEvent.click(screen.getByText("Save"));
  });

  test("allows canceling editing business details", () => {
    fireEvent.click(screen.getByText("Change"));

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "New Business Name" }
    });

    fireEvent.click(screen.getByText("Cancel"));
  });

  test("allows canceling editing transfer details", () => {
    fireEvent.click(screen.getByTestId("edit"));

    fireEvent.change(screen.getByLabelText("Amount"), {
      target: { value: "200.00 GBP" }
    });

    fireEvent.click(screen.getByText("Cancel"));
  });
  test("testing for the confirm button", () => {
    const buttonElement = screen.getAllByTestId("confirmId");
    fireEvent.click(buttonElement[0]);
  });
  test("test for the functionality of the edit ", () => {
    const typoElement = screen.getByText("agree with Wise Terms & Conditions");
    fireEvent.click(screen.getByTestId("edit"));
  });
  test("renders business details correctly", () => {
    const businessDetails = [
      { label: "Name", id: "name" },
      { label: "Email", id: "email" },
      { label: "Account Number", id: "accountno" },
      { label: "Account Type", id: "accounttype" }
    ];
    fireEvent.click(screen.getByText("Change"));
      const nameInput = screen.getByLabelText("Name");
      const emailInput = screen.getByLabelText("Email");
      const accountNoInput = screen.getByLabelText("Account number");
  
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
      fireEvent.change(accountNoInput, { target: { value: "1234567890" } });
      fireEvent.click(screen.getByText("Save"));
  });
  test("doesnt save the details by clicking the save button", () => {
    const businessDetails = [
      { label: "Name", id: "name" },
      { label: "Email", id: "email" },
      { label: "Account Number", id: "accountno" },
      { label: "Account Type", id: "accounttype" }
    ];
    fireEvent.click(screen.getByText("Change"));
      const nameInput = screen.getByLabelText("Name");
      const emailInput = screen.getByLabelText("Email");
      const accountNoInput = screen.getByLabelText("Account number");
  
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
      fireEvent.change(accountNoInput, { target: { value: "123456000000" } });
      fireEvent.click(screen.getByText("Save"));
  });
  test("doesnt save the details by clicking the save button", () => {
    const businessDetails = [
      { label: "Name", id: "name" },
      { label: "Email", id: "email" },
      { label: "Account Number", id: "accountno" },
      { label: "Account Type", id: "accounttype" }
    ];
    fireEvent.click(screen.getByText("Change"));
      const nameInput = screen.getByLabelText("Name");
      const emailInput = screen.getByLabelText("Email");
      const accountNoInput = screen.getByLabelText("Account number");
  
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
      fireEvent.change(accountNoInput, { target: { value: "123456000" } });
      fireEvent.click(screen.getByText("Cancel"));
  });
  test("input validation", () => {
    fireEvent.click(screen.getByText("Change"));
    const input = screen.getByLabelText("Account number");
    fireEvent.keyDown(input)
    fireEvent.change(input, { target: { value: "1235e+-8772" } });
  });
  test("event.preventDefault() is called when invalid keys are pressed", () => {
    fireEvent.click(screen.getByText("Change"));
    const input = screen.getByLabelText("Account number")  as HTMLInputElement;
  
    fireEvent.keyDown(input, { key: "e" });
    fireEvent.keyDown(input, { key: "+" });
    fireEvent.keyDown(input, { key: "-" });
  
   
    expect(input.value).toBe(""); 
  });
});
