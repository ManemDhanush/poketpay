import React from "react";
import { render, screen } from "@testing-library/react";
import { PaymentPageTemplate } from ".";

describe("PaymentPageTemplate", () => {
  const labels = ["Step 1", "Step 2", "Step 3"];
  const activeStep = 0;

  test("renders the component with provided props", () => {
    render(
      <PaymentPageTemplate
        labels={labels}
        activeStep={activeStep}
        displayClose={true}
        displayBack={true}
        children={undefined} />
    );

    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByAltText("Payment")).toBeInTheDocument();
  });
  test("testing for the closing icon", () => {
    render(
      <PaymentPageTemplate
        labels={labels}
        activeStep={activeStep}
        displayClose={false}
        displayBack={false} children={undefined} />
    );
    expect(screen.getByAltText("Close")).toBeInTheDocument();
  })
});