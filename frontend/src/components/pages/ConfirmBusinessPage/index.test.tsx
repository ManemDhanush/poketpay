import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConfirmBusinessPage } from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { ROUTES } from "../../../routes";

describe("ConfirmBusinessPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <ConfirmBusinessPage />
      </Router>
    );
  });

  test("navigates back when back button is clicked", () => {
    const navigateMock = jest.fn();

    fireEvent.click(screen.getByAltText(/back/i));
  });
});
