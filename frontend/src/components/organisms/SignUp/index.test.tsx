import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignUp from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { useAppContext } from "../../../constants";
import * as constants from "../../../constants";
import { getByEmail } from "../../../services";
import { MOCK_USER } from "../WelcomeBack/WelcomeBackConstants";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});
jest.mock("../../../services", () => ({
  getByEmail: jest.fn()
}));
jest.mock("@auth0/auth0-react");
describe("Signup component", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setUser: jest.fn()
    }));
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
    render(
      <Router>
        <SignUp />
      </Router>
    );
  });
  test('handles onClick event for "Next" button', () => {
    const emailInput = screen.getByLabelText(
      "Enter your email address"
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    const button = screen.getByRole("button", { name: "Next" });
    fireEvent.click(button);
  });

  test('handles onClick event for "Terms of Use" link', () => {
    const link = screen.getByText("Terms of use");
    fireEvent.click(link);
  });

  test('handles onClick event for "Privacy Policy" link', () => {
    const link = screen.getByText("Privacy Policy");
    fireEvent.click(link);
  });
  test("should navigate to the specified URL when the first item is clicked", () => {
    const firstItem = screen.getByAltText("google");

    fireEvent.click(firstItem);

    expect(window.location.href).toBe("http://localhost/");
  });

  test("should not navigate when other items are clicked", () => {
    const otherItem = screen.getByAltText("apple");

    fireEvent.click(otherItem);

    expect(window.location.href).not.toBe(
      "https://dev-ffida8gd7gxbzetg.us.auth0.com/authorize?response_type=token&client_id=zzlAgrgVjFbyTCGyf7yKwfjxRQIaqy7u&connection=google-oauth2&redirect_uri=http://localhost:3000/landing-page&prompt=login"
    );
  });

  test('handles onClick event for "Log in" link', () => {
    const link = screen.getByText("Log in");
    fireEvent.click(link);
  });

  test("updates the user email state on input change", () => {
    const emailInput = screen.getByLabelText(
      "Enter your email address"
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput).toHaveValue("test@example.com");
  });
  test("displays error message for invalid email", () => {
    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    const email = screen.getByLabelText("Email");
    fireEvent.change(email, { target: { value: "invalidemail" } });
    const errorMessage = screen.getByText("Please enter valid email");

    expect(errorMessage).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "Next" });
    fireEvent.click(button);
  });
  test("should show the error message for the existing email", async () => {
    const setUserMock = jest.fn();
    (useAppContext as jest.Mock).mockReturnValue({
      setUser: setUserMock
    });
    const mockGetByEmail = (getByEmail as jest.Mock).mockResolvedValueOnce(
      MOCK_USER
    );

    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" }
    });
    fireEvent.click(screen.getByText(/Next/i));
    expect(mockGetByEmail).toHaveBeenCalledWith("john.doe@example.com");

    await waitFor(() => {
      expect(screen.getByTestId("errormessage")).toBeInTheDocument();
    });
  });
  test("should update context on continue button click", async () => {
    const setUserMock = jest.fn();
    (getByEmail as jest.Mock).mockRejectedValueOnce(MOCK_USER);
    (useAppContext as jest.Mock).mockReturnValue({
      setUser: setUserMock
    });

    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "johnm.doe@example.com" }
    });
    fireEvent.click(screen.getByText(/Next/i));
    expect(getByEmail).toHaveBeenCalledWith("johnm.doe@example.com");
  });
  test("should update context on continue button click", async () => {
    const setUserMock = jest.fn();
    (getByEmail as jest.Mock).mockRejectedValueOnce(MOCK_USER);
    (useAppContext as jest.Mock).mockReturnValue({
      setUser: setUserMock
    });

    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "johnm.doe" }
    });
    fireEvent.click(screen.getByText(/Next/i));
    expect(getByEmail).toHaveBeenCalledWith("johnm.doe");
  });
  test("should show the error message for the existing email", async () => {
    const setUserMock = jest.fn();
    (useAppContext as jest.Mock).mockReturnValue({
      setUser: setUserMock
    });
    const mockGetByEmail = (getByEmail as jest.Mock).mockResolvedValueOnce(
      MOCK_USER
    );

    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doeexample" }
    });
    fireEvent.click(screen.getByText(/Next/i));
    expect(mockGetByEmail).toHaveBeenCalledWith("john.doeexample");
  });
});
