import { screen, fireEvent } from "@testing-library/react";
import { ChooseBankPage } from ".";
import { render } from "../../../test-setup";

describe("Bank account page test cases", () => {
  test("should navigate to previous page when clicked on back button", () => {
    render(<ChooseBankPage />);
    const backButton = screen.getByAltText(/back/i);
    fireEvent.click(backButton);
  });
});
