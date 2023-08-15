import { render ,screen,fireEvent} from "@testing-library/react";
import { EnterTransferAmount } from ".";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { SENDMONEY } from "../../../constants";
import { SEND_MONEY } from "../../organisms/sendMoney/sendMoneyConstants";

describe("EnterTransferAmount", () => {
  test("testing whether the components are rendering or not", () => {
    render(
      <Router>
        <EnterTransferAmount />
      </Router>
    );
  });
  test("calls the handleBackFn when the 'Back' button is clicked", () => {
    render(
      <MemoryRouter>
        <EnterTransferAmount/>
      </MemoryRouter>
    );

    const backButton = screen.getByAltText(/back/i);
    fireEvent.click(backButton);
  });
 
});
