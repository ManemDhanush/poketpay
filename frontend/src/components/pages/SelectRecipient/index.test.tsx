import { render, screen, fireEvent } from "@testing-library/react";
import SelectRecipient from ".";
import { MemoryRouter } from "react-router-dom";

describe("SelectRecipient", () => {
  test("renders without errors", () => {
    render(
      <MemoryRouter>
        <SelectRecipient />
      </MemoryRouter>
    );
    const backBtn = screen.getByAltText(/back/i);
    fireEvent.click(backBtn);
  });
});
