import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ApplicationHeader from ".";
import { MemoryRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react");
describe("ApplicationHeader", () => {
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
  });
  test("renders the component", () => {
    render(
      <MemoryRouter>
        <ApplicationHeader />
      </MemoryRouter>
    );
    const altElement = screen.getByAltText("Bell");
    expect(altElement).toBeInTheDocument();
  });

  test("opens the menu when avatar is clicked", () => {
    render(
      <MemoryRouter>
        <ApplicationHeader />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("avatarTypography"));
    expect(screen.getByAltText("Your Details")).toBeInTheDocument();
  });

  test("closes the menu when menu item is clicked", () => {
    render(
      <MemoryRouter>
        <ApplicationHeader />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("avatarTypography"));
    fireEvent.click(screen.getByAltText("Your Details"));
    fireEvent.click(screen.getByText("Logout"));
  });
});
