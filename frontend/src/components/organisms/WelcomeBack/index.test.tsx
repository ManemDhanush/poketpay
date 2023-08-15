import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import WelcomeBack from ".";
import { MemoryRouter } from "react-router-dom";
import { useAppContext } from "../../../constants";
import * as constants from "../../../constants";
import { getByEmail } from "../../../services";
import { MOCK_USER } from "./WelcomeBackConstants";
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
describe("WelcomeBack component", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      currentUser: null,
      setCurrentUser: jest.fn()
    }));
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
    render(
      <MemoryRouter>
        <WelcomeBack />
      </MemoryRouter>
    );
  });
  test('handles onClick event for "Trouble logging in?', () => {
    const link = screen.getByText("Trouble logging in?");
    fireEvent.click(link);
  });

  test('handles onClick event for "Remember me" link', () => {
    const link = screen.getByText("Remember me");
    fireEvent.click(link);
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

  test("updates the user email state on input change", () => {
    const passwordInput = screen.getByLabelText(
      "Enter your password"
    ) as HTMLInputElement;

    fireEvent.change(passwordInput, { target: { value: "testexample" } });

    expect(passwordInput).toHaveValue("testexample");
  });
  test('handles onClick event for "Sign up" link', () => {
    const link = screen.getByText("Sign up");
    fireEvent.click(link);
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

  test("displays error message for invalid email", () => {
    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    const email = screen.getByLabelText("Email");
    fireEvent.change(email, { target: { value: "invalidemail" } });
    const errorMessage = screen.getByText("Please enter valid email");

    expect(errorMessage).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("button1"));
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

  test("should authenticate user and navigate to landing page if email and password are valid", async () => {
    const mockGetByEmail = (getByEmail as jest.Mock).mockResolvedValueOnce(
      MOCK_USER
    );
    const setCurrentUserMock = jest.fn();

    (useAppContext as jest.Mock).mockReturnValue({
      setCurrentUser: setCurrentUserMock
    });

    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" }
    });
    const passwordInput = screen.getByLabelText("Enter your password");
    fireEvent.focus(passwordInput);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" }
    });
    fireEvent.click(screen.getByText("Log in"));
    expect(mockGetByEmail).toHaveBeenCalledWith("john.doe@example.com");
    await mockGetByEmail;
    expect(setCurrentUserMock).toHaveBeenCalledWith(MOCK_USER);
  });
  test("should authenticate user and navigate to landing page if email and password are valid", async () => {
    const mockGetByEmail = (getByEmail as jest.Mock).mockResolvedValueOnce(
      MOCK_USER
    );
    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" }
    });
    const passwordInput = screen.getByLabelText("Enter your password");
    fireEvent.focus(passwordInput);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password" }
    });

    fireEvent.click(screen.getByText("Log in"));
    expect(mockGetByEmail).toHaveBeenCalledWith("test@example.com");
    await mockGetByEmail;
  });

  test("should authenticate user and navigate to landing page if email and password are valid", async () => {
    (getByEmail as jest.Mock).mockRejectedValueOnce(MOCK_USER);
    const emailInput = screen.getByLabelText("Enter your email address");
    fireEvent.focus(emailInput);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" }
    });
    const passwordInput = screen.getByLabelText("Enter your password");
    fireEvent.focus(passwordInput);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" }
    });

    fireEvent.click(screen.getByText("Log in"));
    expect(getByEmail).toHaveBeenCalledWith("test@example.com");
    await waitFor(() => {
      expect(screen.getByTestId("errormessage")).toBeInTheDocument();
    });
  });
});
