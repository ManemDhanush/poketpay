import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LandingPage } from ".";
import { MemoryRouter } from "react-router-dom";
import {
  getTransactions,
  updateTransactions,
  getByEmail,
  postUsers
} from "../../../services";
import { CANCEL_TRANSFER, MOCK_TRANSACTION } from "./landingPageConstants";
import * as constants from "../../../constants";

jest.mock("../../../services", () => ({
  getTransactions: jest.fn(),
  postUsers: jest.fn(() => Promise.resolve({ id: 1 })),
  getByEmail: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve({ id: 1 }))
    .mockImplementationOnce(() => Promise.reject("Error fetching user")),
  updateTransactions: jest.fn()
}));
jest.mock("@auth0/auth0-react", () => ({
  useAuth0: jest.fn(() => ({
    isAuthenticated: true,
    user: {
      given_name: "John",
      family_name: "Doe",
      locale: "City",
      address: "Address",
      birthdate: "01/01/2000",
      email: "john.doe@example.com",
      phone_number: "1234567890"
    }
  }))
}));
jest.mock("../../../constants", () => ({
  useAppContext: jest.fn(() => ({
    currentUser: { id: 1 },
    setCurrentUser: jest.fn()
  })),
  NAVBARPAGETEMPLATE: {
    text: "Home",
    buttonText: "Send money"
  },
  MENUITEMS: []
}));

describe("LandingPage", () => {
  beforeEach(() => {});
  it("renders transaction data correctly", async () => {
    (getTransactions as jest.Mock).mockResolvedValueOnce([MOCK_TRANSACTION]);

    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    (updateTransactions as jest.Mock).mockResolvedValueOnce({});

    await waitFor(() => expect(getTransactions).toHaveBeenCalled());
    const homeHeaderElement = screen.getByText("Mario Gabriel");
    fireEvent.click(homeHeaderElement);
    const button = screen.getByText(CANCEL_TRANSFER);
    fireEvent.click(button);
    const existingAccount = screen.getByTestId("existingaccount");
    fireEvent.click(existingAccount);
    const selectAccountText = screen.getByText(
      "Select an option"
    ) as HTMLSelectElement;
    fireEvent.keyDown(selectAccountText, { key: "ArrowDown" });
    await waitFor(() => screen.getByText("Ending in 4656"));
    fireEvent.click(screen.getByText("Ending in 4656"));
    const buttoncancel = screen.getByText("Cancel transfer");
    fireEvent.click(buttoncancel);
  });

  it("displays an error message if transaction data fails to load", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    (getTransactions as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to load transactions"))
    );
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
  });

  it("renders transaction data correctly", async () => {
    jest.mock("../../../services", () => ({
      getByEmail: jest.fn(() => Promise.reject({ id: 1 }))
    }));
    (getTransactions as jest.Mock).mockResolvedValueOnce([]);
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    await waitFor(() => expect(getTransactions).toHaveBeenCalled());
  });
  it("it checks the title", async () => {
    (getTransactions as jest.Mock).mockResolvedValueOnce([]);
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/home/i)).toHaveLength(2);
  });
  it("displays an error message if transaction is able to make post api call", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    (updateTransactions as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to load transactions"))
    );
    jest.mock("@auth0/auth0-react", () => ({
      useAuth0: jest.fn(() => ({
        isAuthenticated: false,
        user: null
      }))
    }));
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
  });
  test("fetches user data and transactions when authenticated", async () => {
    jest.mock("../../../services", () => ({
      getByEmail: jest.fn(() => Promise.reject({ id: 1 }))
    }));
    jest.spyOn(require("@auth0/auth0-react"), "useAuth0").mockReturnValue({
      isAuthenticated: true,
      user: {
        given_name: "John",
        family_name: "Doe",
        locale: "City",
        address: "Address",
        birthdate: "01/01/2000",
        email: "john.doe@example.com",
        phone_number: "1234567890"
      }
    });
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(getByEmail).toHaveBeenCalledWith("john.doe@example.com");
    expect(postUsers).not.toHaveBeenCalled();
    expect(getTransactions).toHaveBeenCalled();
  });
  test("useEffect else case", async () => {
    jest.mock("../../../services", () => ({
      getByEmail: jest.fn(() => Promise.reject({ id: 1 }))
    }));
    jest.spyOn(require("@auth0/auth0-react"), "useAuth0").mockReturnValue({
      isAuthenticated: false,
      user: null
    });
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(postUsers).not.toHaveBeenCalled();
    expect(getTransactions).toHaveBeenCalled();
  });
});
