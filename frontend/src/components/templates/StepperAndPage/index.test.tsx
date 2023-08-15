import React from "react";
import { render, screen } from "@testing-library/react";
import { StepperAndPageTemplate } from ".";
import { BUTTON_TEXTS, STEPPER_LABELS } from "../../../constants";

describe("StepperAndPageTemplate", () => {
  const activeStep = 0;

  it("renders the component with provided props", () => {
    render(
      <StepperAndPageTemplate
        labels={STEPPER_LABELS[0]}
        activeStep={activeStep}
        displayClose={true}
        displayBack={true}
        buttonText={BUTTON_TEXTS.confirm}
      >
        {}
      </StepperAndPageTemplate>
    );

    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/confirm/i)).toBeInTheDocument();
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/close/i)).toBeInTheDocument();
    expect(screen.getByAltText(/back/i)).toBeInTheDocument();
  });
  it("renders the component without props", () => {
    render(
      <StepperAndPageTemplate
        labels={STEPPER_LABELS[0]}
        activeStep={activeStep}
      >
        {}
      </StepperAndPageTemplate>
    );
  });
  it("functionality check", () => {
    const mockFn = jest.fn;
    render(
      <StepperAndPageTemplate
        labels={STEPPER_LABELS[0]}
        activeStep={activeStep}
        displayBack
        displayClose
        buttonText={BUTTON_TEXTS.confirm}
        handleBackFn={mockFn}
        handleCloseFn={mockFn}
        handleConfirmFn={mockFn}
      >
        {}
      </StepperAndPageTemplate>
    );
  });
});
