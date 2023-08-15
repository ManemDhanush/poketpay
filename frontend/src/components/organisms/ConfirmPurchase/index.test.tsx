import { screen, fireEvent } from "@testing-library/react";
import { ConfirmPurchase } from ".";
import { CONFIRM_PURCHASE } from "./confirmPurchaseConstants";
import { useAppContext } from "../../../constants";
import * as constants from "../../../constants";
import { postTransactions } from "../../../services";
import { render } from "../../../test-setup";
import { MOCK_TRANSACTION } from "../../pages/LandingPage/landingPageConstants";
import { MOCK_USER } from "../WelcomeBack/WelcomeBackConstants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});
jest.mock("../../../services", () => ({
  postTransactions: jest.fn()
}));
describe("Confirm purchase", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      currentUser: MOCK_USER,
      setCurrentUser: jest.fn()
    }));
  });
  test("should render amount", () => {
    render(
      <ConfirmPurchase
        amount={CONFIRM_PURCHASE.amount}
        country={CONFIRM_PURCHASE.country}
      />
    );
    const amount = screen.getByText(/100.00/i);
    expect(amount).toBeInTheDocument();
    const country = screen.getByText(/100.00/i);
    expect(country).toBeInTheDocument();
  });

  test("should navigate to next page when button is clicked", async () => {
    const mockPostTransactions = (
      postTransactions as jest.Mock
    ).mockResolvedValueOnce(MOCK_TRANSACTION);

    (useAppContext as jest.Mock).mockReturnValue({
      currentUser: MOCK_USER
    });
    render(
      <ConfirmPurchase
        amount={CONFIRM_PURCHASE.amount}
        country={CONFIRM_PURCHASE.country}
      />
    );
    const completeBtn = screen.getByText(CONFIRM_PURCHASE.btnText);
    fireEvent.click(completeBtn);
    await mockPostTransactions;
  });
});
