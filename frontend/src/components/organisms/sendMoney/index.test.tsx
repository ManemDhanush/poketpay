import { fireEvent, render, screen } from "@testing-library/react";
import { SendMoney } from ".";
import { SEND_MONEY } from "./sendMoneyConstants";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { ROUTES } from "../../../routes";

describe("Send money", () => {
  
  test("renders cards", () => {
    render(
      <MemoryRouter>
        <SendMoney />
      </MemoryRouter>
    );
    SEND_MONEY.cardsContent.forEach((item) => {
      const img = screen.getByAltText(item.alt);
      expect(img).toBeInTheDocument();

      const title = screen.getByText(item.title);
      expect(title).toBeInTheDocument();

      const subtitle = screen.getByText(item.subtitle);
      expect(subtitle).toBeInTheDocument();
    });
  });
  test("whether the onclick functionilty to navigate is working or not",()=>{
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {
        ...originalModule,
        useNavigate: jest.fn(),
      };
    });
    const navigateMock = jest.requireMock('react-router-dom').useNavigate;

    render(
      <MemoryRouter>
        <SendMoney />
      </MemoryRouter>
    );
    const cards=screen.getAllByTestId("iconTypo");
    fireEvent.click(cards[0]);
    fireEvent.click(cards[1]);
  })
});