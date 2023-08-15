import { render, screen } from "@testing-library/react";
import { AddressRadio, RadioTypoProps } from ".";

describe("RadioTypo", () => {
  const defaultProps: RadioTypoProps = {
    address: "123 Main St",
    addressNo: "1"
  };

  it("renders the address text", () => {
    render(<AddressRadio {...defaultProps} />);
    const addressText = screen.getByText("123 Main St");
    expect(addressText).toBeInTheDocument();
  });

  it("renders the address number text", () => {
    render(<AddressRadio {...defaultProps} />);
    const addressNumberText = screen.getByText("Address 1");
    expect(addressNumberText).toBeInTheDocument();
  });
});
