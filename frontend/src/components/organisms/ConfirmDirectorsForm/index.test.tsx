import { render, fireEvent, screen, within } from "@testing-library/react";
import ConfirmDirectorsForm from ".";
import { CONFIRMDIRECTORSFORMCONTENT } from "../ConfirmDirectorsForm/ConfirmDirectorsForm";

describe("ConfirmDirectorsForm", () => {
  const directorsData = {
    heading: CONFIRMDIRECTORSFORMCONTENT.title,
    caption: CONFIRMDIRECTORSFORMCONTENT.content,
    type: "Director",
    addAnotherText: "Add another director"
  };
  it('should add another director when "Add another director" is clicked', () => {
    render(<ConfirmDirectorsForm detailsProps={directorsData} />);
    const addDirectorButton = screen.getByText("Add another director");

    fireEvent.click(addDirectorButton);

    // Verify that another set of director fields is rendered
    expect(screen.getAllByLabelText("First name")).toHaveLength(2);
    expect(screen.getAllByLabelText("Last name")).toHaveLength(2);
    expect(screen.getAllByLabelText("Date of birth")).toHaveLength(2);
  });
  test("renders the component", () => {
    render(<ConfirmDirectorsForm detailsProps={directorsData} />);
    // Add assertions to check if the component renders as expected
  });

  test('adds a new director when "Add another director" is clicked', () => {
    const { getByText } = render(
      <ConfirmDirectorsForm detailsProps={directorsData} />
    );
    const addButton = getByText("Add another director");
    fireEvent.click(addButton);
    // Add assertions to check if a new director is added
    const firstNameInputs = screen.getAllByLabelText("First name");
    fireEvent.change(firstNameInputs[1], { target: { value: "Ross" } });
  });

  // Add more test cases as needed
  test('removes a director when "Remove" button is clicked', () => {
    render(<ConfirmDirectorsForm detailsProps={directorsData} />);
    const addButton = screen.getByText("Add another director");
    fireEvent.click(addButton);
    const removeButton = screen.getByLabelText("Remove");
    fireEvent.click(removeButton);
    // Add assertions to check if a director is removed
  });

  test("updates director fields when input values change", () => {
    render(<ConfirmDirectorsForm detailsProps={directorsData} />);
    const lastNameInput = screen.getByLabelText("Last name");
    fireEvent.change(lastNameInput, { target: { value: "Gener" } });
    fireEvent.change(lastNameInput, { target: { value: "Gener" } });
    expect(lastNameInput).toHaveValue("Gener");
  });
  test("updates director fields when input values change", () => {
    render(<ConfirmDirectorsForm detailsProps={directorsData} />);
    const dateInput = screen.getByLabelText("Date of birth");
    fireEvent.change(dateInput, { target: { value: "01-01-2023" } });
    expect(dateInput).toHaveValue("01-01-2023");
  });
});
