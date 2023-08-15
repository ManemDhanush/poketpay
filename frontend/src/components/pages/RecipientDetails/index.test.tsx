import { render,screen,fireEvent } from "@testing-library/react";
import RecipientDetailsPage from ".";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { TRANSFER_DETAILS } from "../../organisms/TransferDetailsCard/transferDetailsTextConstants";

describe("RecipientDetailsPage", () => {
  test("renders without errors", () => {
    render(
      <Router>
        <RecipientDetailsPage />
      </Router>
    );
  });
  test("calls the handleBackFn when the 'Back' button is clicked", () => {
    render(
      <MemoryRouter>
        <RecipientDetailsPage/>
      </MemoryRouter>
    );

    const backButton = screen.getByAltText(/back/i);
    fireEvent.click(backButton);
  });
});
