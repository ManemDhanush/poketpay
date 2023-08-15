import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ConfirmTradingAddress } from ".";
import { CONFIRM_TRADING } from "./confirmTradingAddressConstants";
import { BrowserRouter as Router} from "react-router-dom";

describe("ConfirmTradingAddress", () => {
  beforeEach(() => {
    render(
      <Router >
        <ConfirmTradingAddress/>
      </Router>
    );
  });
  

  test("renders correctly", () => {
    const title = screen.getByText(CONFIRM_TRADING.title);
    expect(title).toBeInTheDocument();
  });

  test("selects edit link", () => {
    const editLink = screen.getByText(CONFIRM_TRADING.edit);
    expect(editLink).toBeInTheDocument();

    fireEvent.click(editLink);
  });

  test("toggles displayEdit state when edit link is clicked and clicks save", () => {
    const address = screen.getByText(/address 1/i);
    expect(address).toBeInTheDocument();
    fireEvent.click(address);
    const editLink = screen.getByText(CONFIRM_TRADING.edit);
    expect(editLink).toBeInTheDocument();

    fireEvent.click(editLink);

    const saveBtn = screen.getByText(CONFIRM_TRADING.save);
    fireEvent.click(saveBtn);
  });

  test("toggles displayEdit state when edit link is clicked and clicks cancel", () => {
    const address = screen.getByText(/address 1/i);
    expect(address).toBeInTheDocument();
    fireEvent.click(address);
    const editLink = screen.getByText(CONFIRM_TRADING.edit);
    expect(editLink).toBeInTheDocument();

    fireEvent.click(editLink);

    const saveBtn = screen.getByText(CONFIRM_TRADING.cancel);
    fireEvent.click(saveBtn);
  });

  test('displays modal when "Add Address" button is clicked', () => {
    const addButton = screen.getByText(CONFIRM_TRADING.buttonsContent[0]);

    fireEvent.click(addButton);
    const addAddress = screen.getByText(CONFIRM_TRADING.modal.btn);
    expect(addAddress).toBeInTheDocument();
    const inputElement = screen.getByLabelText(/Trading address/i);
    fireEvent.change(inputElement, {
      target: { value: CONFIRM_TRADING.title }
    });
    fireEvent.click(addAddress);
  });

  test("selects an address", () => {
 
    const address = screen.getByText(/address 1/i);
    expect(address).toBeInTheDocument();
    fireEvent.click(address);
  });

  test("select address edit", () => {
    const address = screen.getByText(/address 1/i);
    expect(address).toBeInTheDocument();
    fireEvent.click(address);

    const editLink = screen.getByText(CONFIRM_TRADING.edit);
    expect(editLink).toBeInTheDocument();
    fireEvent.click(editLink);

    const inputElement = screen.getByLabelText(/Trading address 1/i);
    fireEvent.change(inputElement, {
      target: { value: CONFIRM_TRADING.title }
    });
  });
  it('should navigate to "/business-activity" when button is clicked', () => {
    const button = screen.getByTestId('confirm'); 
    fireEvent.click(button);
  });
});
