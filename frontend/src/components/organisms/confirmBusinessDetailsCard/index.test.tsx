import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfirmBusinessDetailsCard, FormValuesType } from ".";
import { BUTTON_TEXTS, CONTENT } from "../../../constants";
import { useAppContext } from "../../../constants";
import * as constants from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});

describe("ConfirmBusinessDetailsCard", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setBusiness: jest.fn()
    }));
    render(
      <Router>
        <ConfirmBusinessDetailsCard />
      </Router>
    );
  });

  it("renders the component", () => {
    expect(
      screen.getByText(CONTENT.confirmDetailsCard.title)
    ).toBeInTheDocument();
    const navigate = screen.getByText(BUTTON_TEXTS.confirm);
    fireEvent.click(navigate);
  });

  it("switches to edit mode when edit link is clicked", () => {
    fireEvent.click(screen.getByText(CONTENT.confirmDetailsCard.content_edit));

    CONTENT.confirmDetailsCard.inputFieldLabels.forEach((item) => {
      expect(screen.getByLabelText(item.label)).toBeInTheDocument();
    });

    expect(screen.getByText(BUTTON_TEXTS.save)).toBeInTheDocument();
    expect(screen.getByText(BUTTON_TEXTS.cancel)).toBeInTheDocument();
  });

  it("saves the edited values and switches back to read-only mode", () => {
    fireEvent.click(screen.getByText(CONTENT.confirmDetailsCard.content_edit));

    const newValues: FormValuesType = {
      businessName: "New Business Name",
      regNo: "New Registration Number",
      regAddr: "New Registered Address"
    };
    CONTENT.confirmDetailsCard.inputFieldLabels.forEach((item) => {
      const inputField = screen.getByLabelText(item.label);
      fireEvent.change(inputField, { target: { value: newValues[item.id] } });
    });

    fireEvent.click(screen.getByText(BUTTON_TEXTS.save));

    CONTENT.confirmDetailsCard.inputFieldLabels.forEach((item) => {
      expect(screen.getByText(newValues[item.id])).toBeInTheDocument();
    });

    expect(
      screen.getByText(CONTENT.confirmDetailsCard.content_edit)
    ).toBeInTheDocument();
  });
  it("should not save details when cancel button clicked", () => {
    fireEvent.click(screen.getByText(CONTENT.confirmDetailsCard.content_edit));
    fireEvent.click(screen.getByText(/cancel/i));
  });
});
