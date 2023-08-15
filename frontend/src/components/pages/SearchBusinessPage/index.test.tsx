import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchBusinessPage } from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("SearchBusinessPage", () => {
  test("renders the component", () => {
    render(
      <Router>
        <SearchBusinessPage />
      </Router>
    );
    expect(screen.getByText(/Search for your business/i)).toBeInTheDocument();
  });
});
