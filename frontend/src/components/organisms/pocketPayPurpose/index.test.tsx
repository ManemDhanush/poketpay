import { fireEvent, render,screen} from "@testing-library/react";
import { PocketPayPurpose } from ".";
import { POCKETPAY_PURPOSE_CONTENT } from "../../../constants";
import { BrowserRouter } from "react-router-dom";

describe("PocketPayPurpose", () => {

  test("displays the correct title", () => {
    const { getByText } = render(<BrowserRouter><PocketPayPurpose /></BrowserRouter>);
    const titleElement = getByText(POCKETPAY_PURPOSE_CONTENT.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the correct number of purpose items", () => {
    const { getAllByTestId } =render(<BrowserRouter><PocketPayPurpose /></BrowserRouter>);
    const purposeItems = getAllByTestId("purpose-item");
    expect(purposeItems.length).toBe(POCKETPAY_PURPOSE_CONTENT.purposes.length);
  });

  test("each purpose item displays the correct content", () => {
    const { getAllByTestId } = render(<BrowserRouter><PocketPayPurpose /></BrowserRouter>);
    const purposeItems = getAllByTestId("purpose-item");

    purposeItems.forEach((item, index) => {
      const { src, alt, text } = POCKETPAY_PURPOSE_CONTENT.purposes[index];
      const imageElement = item.querySelector("img");
      const textElement = item.querySelector("p");

      expect(imageElement).toHaveAttribute("src", src);
      expect(imageElement).toHaveAttribute("alt", alt);
      expect(textElement).toHaveTextContent(text);
    });
  });
  test("for testing for the onclick functionality",()=>{
    render(<BrowserRouter><PocketPayPurpose /></BrowserRouter>);
    const elements=screen.getAllByTestId("purpose-item")
    fireEvent.click(elements[0]);
    fireEvent.click(elements[1]);
    fireEvent.click(elements[2]);
  })
});
