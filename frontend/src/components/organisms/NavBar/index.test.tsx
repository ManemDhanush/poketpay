import { render, screen } from "@testing-library/react";
import NavBar from ".";

describe("NavBar", () => {
  it("renders the logo", () => {
    render(<NavBar />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders balances section when showOptionalCode is true", () => {
    render(<NavBar showOptionalCode={true} />);
    const balancesSection = screen.getByText("Balances");
    expect(balancesSection).toBeInTheDocument();
  });

  it("renders jars section when showOptionalCode is true", () => {
    render(<NavBar showOptionalCode={true} />);
    const jarsSection = screen.getByText("Jars");
    expect(jarsSection).toBeInTheDocument();
  });
  
});
