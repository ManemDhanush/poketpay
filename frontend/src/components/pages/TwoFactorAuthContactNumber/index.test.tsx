import React from "react";
import { render, fireEvent,screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { TwoFactorAuthContactNumber } from ".";
import { TWO_FACTOR_AUTH } from "./twoFactorAuthContactNumberConstants";

describe("TwoFactorAuthContactNumber", () => {
  test("renders the component correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <TwoFactorAuthContactNumber />
      </MemoryRouter>
    );

    expect(getByText(TWO_FACTOR_AUTH.title)).toBeInTheDocument();
    expect(getByText(TWO_FACTOR_AUTH.subTitle)).toBeInTheDocument();
  });
  it('should navigate to "/choose-country" when button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <TwoFactorAuthContactNumber />
      </MemoryRouter>
    );
    const button = screen.getByTestId("back");
    fireEvent.click(button);
  });
});
