import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { CancelTransferModal } from ".";

describe("CancelTransferModal", () => {
  test("renders without errors", () => {
    render(<CancelTransferModal handleOpen={() => {}} />);
    const typoElement = screen.getByTestId("canceltext1");
    expect(typoElement).toBeInTheDocument();
  });

  test("test to see if the dropdowns are rendering properly", () => {
    render(<CancelTransferModal handleOpen={() => {}} />);
    const existingAccount = screen.getByTestId("existingaccount");
    fireEvent.click(existingAccount);
    const selectAccountText = screen.getByText("Select an option"); // Replace with the actual select account text value
    expect(selectAccountText).toBeInTheDocument();
  });

  test("test to set the target value of the dropdown", async () => {
    render(<CancelTransferModal handleOpen={() => {}} />);
    const existingAccount = screen.getByTestId("existingaccount");
    fireEvent.click(existingAccount);
    const selectAccountText = screen.getByText(
      "Select an option"
    ) as HTMLSelectElement; // Replace with the actual select account text value
    fireEvent.keyDown(selectAccountText, { key: "ArrowDown" });
    await waitFor(() => screen.getByText("Ending in 4656"));
    fireEvent.click(screen.getByText("Ending in 4656"));
  });
  
  test("test to set the target value of the dropdown", async () => {
    render(<CancelTransferModal handleOpen={() => {}} />);
    const existingAccount = screen.getByTestId("existingaccount");
    fireEvent.click(existingAccount);
    const selectAccountText = screen.getByText(
      "Select an option"
    ) as HTMLSelectElement; // Replace with the actual select account text value
    fireEvent.keyDown(selectAccountText, { key: "ArrowDown" });
    await waitFor(() => screen.getByText("Ending in 4656"));
    fireEvent.click(screen.getByText("Ending in 4656"));
    const button = screen.getByText("Cancel transfer");
    fireEvent.click(button);
  });
});
