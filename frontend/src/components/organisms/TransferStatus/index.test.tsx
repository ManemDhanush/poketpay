import { render, screen } from "@testing-library/react";
import { TransferStatus } from ".";
import { texts } from "./transferStatusConstants";

describe("TransferStatus", () => {
  test("renders transfer details correctly", () => {
    render(<TransferStatus status="Sending" />);
    texts.forEach((element) => {
      const name = screen.getByText(element.name);
      expect(name).toBeInTheDocument();
      const value = screen.getByText(element.value);
      expect(value).toBeInTheDocument();
    });
  });
});
