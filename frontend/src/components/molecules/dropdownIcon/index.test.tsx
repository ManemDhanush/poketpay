import { render, screen } from "@testing-library/react";
import { DropdownIcon, DropdownIconProps } from ".";

const mockOptions: string[] = ["India", "UK", "Europe"];
const mockIconsTypo = [
  { flag: "indiaFlag.svg", code: "INR" },
  { flag: "ukflag.svg", code: "UK" },
  { flag: "europeFlag.svg", code: "EUR" }
];

const renderDropdownIcon = (props: DropdownIconProps) => {
  render(<DropdownIcon {...props} />);
};

describe("DropdownIcon", () => {
  test("renders the dropdown with options and labels", () => {
    renderDropdownIcon({ options: mockOptions, iconsTypo: mockIconsTypo });

    const dropdownLabel = screen.getAllByText("Country of residence");
    expect(dropdownLabel).toHaveLength(2);
  });
});
