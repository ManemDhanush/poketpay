import { render, screen } from "@testing-library/react";
import { CheckboxTypo } from ".";

describe("CheckboxTypo", () => {
it("should render with default props", () => {
render(<CheckboxTypo text="Test" />);
const checkbox = screen.getByRole("checkbox");
const label = screen.getByText("Test");
expect(checkbox).toBeInTheDocument();
expect(label).toBeInTheDocument();
expect(label).toHaveStyle("color: undefined");
});

it("should render with custom props", () => {
render(
<CheckboxTypo
     text="Test"
     labelVariant="h6"
     textColor="red"
     checkboxsize="small"
   />
);
const checkbox = screen.getByRole("checkbox");
const label = screen.getByText("Test");
expect(checkbox).toBeInTheDocument();
expect(label).toBeInTheDocument();
expect(label).toHaveStyle("color: red");
});
});