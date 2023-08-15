import { render ,screen,fireEvent} from "@testing-library/react";
import ReviewTransferDetailsPage from ".";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { CONFIRMBUSINESSOWNERSCONTENT } from "../../organisms/ConfirmBusinessOwners/ConfirmBusinessOwners";

describe("ReviewTransferDetailsPage", () => {
  test("renders without errors", () => {
    render(
      <Router>
        <ReviewTransferDetailsPage />
      </Router>
    );
  });
  test("calls the handleBackFn when the 'Back' button is clicked", () => {
    render(
      <MemoryRouter>
        <ReviewTransferDetailsPage/>
      </MemoryRouter>
    );

    const backButton = screen.getByAltText(/back/i);
    fireEvent.click(backButton);
  });
});
