import { render, fireEvent, screen } from "@testing-library/react";
import { CreateNewPassword } from ".";
import {  BrowserRouter as Router } from "react-router-dom";
import { useAppContext } from "../../../constants";
import * as constants from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

describe("CreateNewPassword", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setUser: jest.fn()
    }));})
  beforeEach(() => {
    render(
      <Router>
        <CreateNewPassword />
      </Router>
    );
  });
  test("should render the component", () => {
    expect(screen.getByTestId("text1")).toBeInTheDocument();
  });

  test("should toggle password visibility when the toggle button is clicked", () => {
    const passwordInput = screen.getByLabelText(
      "Enter your password"
    ) as HTMLInputElement;
    fireEvent.focus(passwordInput);
    const toggleButton = screen.getByTestId("image");
    expect(passwordInput.type).toBe("password");

    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("text");

    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("password");
  });

  test("should change the label to 'Password' after clicking on the input field", () => {
    const passwordInput = screen.getByLabelText("Enter your password");

    fireEvent.focus(passwordInput);
  });
  test("should update the password value on change", () => {
    const passwordInput = screen.getByLabelText(
      "Enter your password"
    ) as HTMLInputElement;

    fireEvent.change(passwordInput, { target: { value: "newpassword" } });

    expect(passwordInput.value).toBe("newpassword");
  });
  it('should navigate to "/two-factor-auth-otp" when button is clicked', () => {
    const passwordInput = screen.getByLabelText(
      "Enter your password"
    ) as HTMLInputElement;

    fireEvent.change(passwordInput, { target: { value: "newpassword" } });

    expect(passwordInput.value).toBe("newpassword");

    const button = screen.getByTestId("back");
    fireEvent.click(button);
    fireEvent.click(screen.getByTestId("button-test"));
  });
  test("should update context on continue button click", () => {
    const setTransactionMock = jest.fn();
    (useAppContext as jest.Mock).mockReturnValue({
      setTransaction: setTransactionMock
    });

    fireEvent.click(screen.getByText(/Continue/i));
  });
});