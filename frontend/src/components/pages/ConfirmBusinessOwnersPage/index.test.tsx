import { render,screen,fireEvent } from "@testing-library/react";
import ConfirmBusinessOwnersPage from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("ConfirmBusinessOwnersPage", () => {
  test("renders without errors", () => {
    render(<Router>
      <ConfirmBusinessOwnersPage />
    </Router>);
  });
  it('should navigate review transfer details page when button is clicked', () => {
    render(
      <Router>
        <ConfirmBusinessOwnersPage />
      </Router>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    fireEvent.click(screen.getByTestId("back"))
  });

});
