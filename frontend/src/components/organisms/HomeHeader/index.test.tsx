import { render, screen } from "@testing-library/react";
import { HomeHeader } from ".";

describe("HomeHeader", () => {
  const mockProps = {
    icon: "path/to/icon",
    name: "Sample Name",
    currencysend: "USD",
    currencyrecieve: "EUR",
    message: "Sample message",
  };

  it("renders the component correctly", () => {
    render(<HomeHeader {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.message)).toBeInTheDocument();
    expect(screen.getByText(mockProps.currencysend)).toBeInTheDocument();
    expect(screen.getByText(mockProps.currencyrecieve)).toBeInTheDocument();
  });
});
