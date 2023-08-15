import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckboxAtom from ".";
import { CheckboxAtomdefaultProps } from "../../../constants";

describe("CheckboxAtom", () => {
  it("renders the checkbox with the default props", () => {
    render(<CheckboxAtom {...CheckboxAtomdefaultProps} />);
    const checkbox = screen.getByLabelText(CheckboxAtomdefaultProps.label!);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    expect(checkbox).not.toBeDisabled();
  });

  it("renders the checkbox with the label", () => {
    const label = "Custom Label";
    render(<CheckboxAtom {...CheckboxAtomdefaultProps} label={label} />);
    const checkbox = screen.getByLabelText(label);
    expect(checkbox).toBeInTheDocument();
  });
  test("handles click events correctly", () => {
    const label = "Custom Label";
    const handleClick = jest.fn(); // Create a mock function
    const { getByLabelText } = render(
      <CheckboxAtom handleClick={handleClick} label={label} />
    );

    const checkbox = getByLabelText(label);

    fireEvent.click(checkbox);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
