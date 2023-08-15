import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TwoFactorAuthentication } from ".";
import { TwoFactorAuthenticationConstants } from "./TwoFactorAuthenticationConstants";
import { BrowserRouter as Router } from "react-router-dom";
import * as constants from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});
describe("TwoFactorAuthentication component", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setUser: jest.fn()
    }));

    render(
      <Router>
        <TwoFactorAuthentication />
      </Router>
    );
  });
  it("should render the initial content correctly", () => {
    expect(
      screen.getByText(TwoFactorAuthenticationConstants.EnterCode.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(TwoFactorAuthenticationConstants.EnterCode.linkText)
    ).toBeInTheDocument();
  });

  it('should display "Verify Another Way" content when link text is clicked', () => {
    fireEvent.click(
      screen.getByText(TwoFactorAuthenticationConstants.EnterCode.linkText)
    );

    expect(
      screen.getByText(TwoFactorAuthenticationConstants.VerifyAnotherWay.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        TwoFactorAuthenticationConstants.VerifyAnotherWay.subtitle
      )
    ).toBeInTheDocument();
    fireEvent.click(screen.getByText(/use a different/i));
  });
  it("should change the input values", () => {
    const inputElement = screen.getByLabelText(
      TwoFactorAuthenticationConstants.EnterCode.label
    );
    const inputValue = "123456";
    fireEvent.change(inputElement, { target: { value: inputValue } });
  });
  it('should navigate to "/create-pasword" when button is clicked', () => {
    const button = screen.getByTestId("confirm");
    fireEvent.click(button);
  });

  test("input validation", () => {
    const input = screen.getByLabelText("Enter code here");
    fireEvent.change(input, { target: { value: "1234567" } });
  });
  test("input validation", () => {
    const input = screen.getByLabelText("Enter code here");
    fireEvent.keyDown(input);
    fireEvent.change(input, { target: { value: "1235e+-" } });
  });
  test("event.preventDefault() is called when invalid keys are pressed", () => {
    const input = screen.getByLabelText("Enter code here") as HTMLInputElement;

    fireEvent.keyDown(input, { key: "e" });
    fireEvent.keyDown(input, { key: "+" });
    fireEvent.keyDown(input, { key: "-" });

    expect(input.value).toBe("");
  });
});
