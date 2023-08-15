import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { TwoFactorAuthOTP } from ".";
import { TWO_FACTOR_AUTH_OTP } from "./twoFactorAuthOTPConstants";

describe("TwoFactorAuthOTP", () => {
  test("calls the handleBackFn when the 'Back' button is clicked", () => {
    render(
      <MemoryRouter>
        <TwoFactorAuthOTP />
      </MemoryRouter>
    );

    const backButton = screen.getByAltText(/back/i);
    fireEvent.click(backButton);
    expect(screen.getByText(TWO_FACTOR_AUTH_OTP.btnText)).toBeInTheDocument();
  });
});
