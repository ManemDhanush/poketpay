import { render } from "@testing-library/react";
import { UserDetails } from ".";
import { MemoryRouter } from "react-router-dom";

describe("SelectCountry", () => {
  test("renders without errors", () => {
    const { getByText } = render(<MemoryRouter><UserDetails /></MemoryRouter>);
    const textElement = getByText("Fill in your details");
    expect(textElement).toBeInTheDocument();
  });
});
