import { render, screen } from "@testing-library/react";
import { IconTypo, IconTypoProps } from ".";

const defaultProps: IconTypoProps = {
  icon: "path/to/icon",
  iconAlt: "icon alt text",
  text: "example text",
  borderState: false
};
const defaultProps2: IconTypoProps = {
  icon: "path/to/icon",
  iconAlt: "icon alt text",
  text: "example text",
  borderState: true
};


describe("IconTypo", () => {

  it("renders the correct icon", () => {
    render(<IconTypo {...defaultProps} />);
    const iconElement = screen.getByAltText("icon alt text");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", "path/to/icon");
  });

  it("renders the correct text", () => {
    render(<IconTypo {...defaultProps} />);
    const textElement = screen.getByText("example text");
    expect(textElement).toBeInTheDocument();
  });
  it("test for the border of the component",()=>{
    render(<IconTypo {...defaultProps2} />)
    const textElement = screen.getByText("example text");
    expect(textElement).toBeInTheDocument();
  })
});