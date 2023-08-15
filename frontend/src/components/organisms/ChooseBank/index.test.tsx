import { fireEvent, screen } from "@testing-library/react";
import { ChooseBank } from ".";
import { render } from "../../../test-setup";

describe("Choose Bank Component", () => {
  test("testing whether the components are rendering correctly", () => {
    render(<ChooseBank />);
    const imageElement = screen.getByAltText("Lloyds");
    expect(imageElement).toBeInTheDocument();
  });
  test("test if the modal component is rendering correctly", () => {
    render(<ChooseBank />);
    const buttonElement = screen.getByTestId("button1");
    fireEvent.click(buttonElement);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    fireEvent.click(screen.getByText(/yes/i));
  });

  test("should navigate to next page when lloyd's bank is clicked", () => {
    render(<ChooseBank />);
    const lloydsBank = screen.getByText(/lloyds/i);
    fireEvent.click(lloydsBank);
  });

  test("should not  navigate to next page when lloyd's bank is not clicked", () => {
    render(<ChooseBank />);
    const hdfcBank = screen.getByText(/hdfc/i);
    fireEvent.click(hdfcBank);
  });
});
