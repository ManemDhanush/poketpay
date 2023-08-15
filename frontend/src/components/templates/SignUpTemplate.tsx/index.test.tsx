import { render } from "@testing-library/react";
import { SignUpTemplate } from ".";

describe("StepperAndPageTemplate", () => {
  it("renders children inside the Body component", () => {
    const { getByText } = render(
      <SignUpTemplate>
        <div>Test Content</div>
      </SignUpTemplate>
    );

    const contentElement = getByText("Test Content");
    expect(contentElement).toBeInTheDocument();
  });
});
