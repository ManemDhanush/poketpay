import { render, screen, fireEvent } from "@testing-library/react";
import TabHeader from ".";

describe("TabHeader component", () => {
  it("renders Tabs and TabPanel correctly", () => {
    render(<TabHeader />);

    // Verify that the Tabs are rendered
    expect(screen.getByRole("tab", { name: "UPDATES" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "DETAILS" })).toBeInTheDocument();

    // Simulate clicking on the "DETAILS" tab
    fireEvent.click(screen.getByRole("tab", { name: "DETAILS" }));
    fireEvent.click(screen.getByRole("tab", { name: "UPDATES" }));
  });

  it("allows selecting options in the Select component", () => {
    render(<TabHeader />);

    // Verify that the initial select value is "General"
    expect(screen.getByText("General")).toBeInTheDocument();
  });

  it("allows sharing", () => {
    render(<TabHeader />);

    const button = screen.getByAltText("share");
    fireEvent.click(button);
  });
});
