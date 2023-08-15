import {
  fireEvent,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { PayeeDetailsCard } from ".";
import { PAYEE_DETAILS_CONTENT } from "./payeeDetailsConstants";
import { render } from "../../../test-setup";
import * as constants from "../../../constants";
import { postTransactions } from "../../../services";
import { MOCK_TRANSACTION } from "../../pages/LandingPage/landingPageConstants";
import { MOCK_USER } from "../WelcomeBack/WelcomeBackConstants";
import { useAppContext } from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});
jest.mock("../../../services", () => ({
  postTransactions: jest.fn()
}));

const mockValues = PAYEE_DETAILS_CONTENT.contentValues;
const contentLabels = PAYEE_DETAILS_CONTENT.contentLabels;

describe("PayeeDetailsCard", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      currentUser: MOCK_USER,
      setCurrentUser: jest.fn()
    }));
    render(<PayeeDetailsCard values={mockValues} />);
  });

  it("renders the content labels correctly", () => {
    contentLabels.forEach((label) => {
      const labelElement = screen.getByText(label);
      expect(labelElement).toBeInTheDocument();
    });
  });

  it("renders the values correctly", () => {
    mockValues.forEach((value) => {
      const valueElement = screen.getByText(value);
      expect(valueElement).toBeInTheDocument();
    });
  });

  it("renders the continue button correctly", () => {
    const continueButton = screen.getByRole("button", {
      name: PAYEE_DETAILS_CONTENT.continue
    });
    expect(continueButton).toBeInTheDocument();
  });

  it("renders the cancel button correctly", () => {
    const cancelButton = screen.getByRole("button", {
      name: PAYEE_DETAILS_CONTENT.cancel
    });
    expect(cancelButton).toBeInTheDocument();
  });

  it("should navigate when continue is clicked", async () => {
    const mockPostTransactions = (
      postTransactions as jest.Mock
    ).mockResolvedValueOnce(MOCK_TRANSACTION);

    (useAppContext as jest.Mock).mockReturnValue({
      currentUser: MOCK_USER
    });
    const continueBtn = screen.getByText(/continue/i);
    fireEvent.click(continueBtn);
    await mockPostTransactions;
  });
  it("should navigate when cancel the transfer is clicked", () => {
    const cancelBtn = screen.getByText(/cancel this transfer/i);
    fireEvent.click(cancelBtn);
  });
});
