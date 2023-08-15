import {
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import { VerifyAccountCard } from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { useAppContext } from "../../../constants";
import * as constants from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});

const items = [
  "Design, marketing or communication",
  "Marketing and Designing",
  "0-50"
];
describe("VerifyAccountCard Component", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setBusiness: jest.fn()
    }));
    render(
      <Router>
        <VerifyAccountCard/>
      </Router>
    );
  });
  test("tests if the typography components renders correctly", () => {
    const categoryElement = screen.getByTestId("textId");
    const subCategoryElement = screen.getByTestId("subTextId");
    expect(categoryElement).toBeInTheDocument();
    expect(subCategoryElement).toBeInTheDocument();
  });

  test("testing for the three dropdowns", async () => {
    const items = [
      "Design, marketing or communication",
      "Real estate sale, purchase and management",
      "0-50"
    ];

    const element1 = screen.getByTestId("select1");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => screen.getByText(items[0]));
    fireEvent.click(screen.getByText(items[0]));

    const element2 = screen.getByTestId("select2");
    fireEvent.keyDown(element2.firstChild!, { key: "ArrowDown" });
    await waitFor(() => screen.getByText(items[1]));
    fireEvent.click(screen.getByText(items[1]));

    const element3 = screen.getByTestId("select3");
    fireEvent.keyDown(element3.firstChild!, { key: "ArrowDown" });
    await waitFor(() => screen.getByText(items[2]));
    fireEvent.click(screen.getByText(items[2]));
  });
  test("should update context on continue button click", () => {
    const setBusinessMock = jest.fn();
    (useAppContext as jest.Mock).mockReturnValue({
      setBusiness: setBusinessMock
    });
  
    fireEvent.click(screen.getByText(/Continue/i));
  });
});
