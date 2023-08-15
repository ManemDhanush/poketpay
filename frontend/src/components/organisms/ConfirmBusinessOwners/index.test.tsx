import { render, fireEvent, screen } from "@testing-library/react";
import ConfirmOwnersForm from ".";
import { CONFIRMBUSINESSOWNERSCONTENT } from "./ConfirmBusinessOwners";


describe("ConfirmOwnersDetails", () => {
   const ownersData = {
    heading: CONFIRMBUSINESSOWNERSCONTENT.title,
    caption: CONFIRMBUSINESSOWNERSCONTENT.content,
    type: "Shareholder",
    addAnotherText: "Add another owner"
  };
  it('should add another owner when "Add another owner" is clicked', () => {
    render(<ConfirmOwnersForm detailsProps={ownersData} />);
    const addOwnerButton = screen.getByText("Add another owner");

    fireEvent.click(addOwnerButton);

    // Verify that another set of owner fields is rendered
    expect(screen.getAllByLabelText("First name")).toHaveLength(2);
    expect(screen.getAllByLabelText("Last name")).toHaveLength(2);
    expect(screen.getAllByLabelText("Date of birth")).toHaveLength(2);
  });
  test("renders the component", () => {
    render(<ConfirmOwnersForm detailsProps={ownersData} />);
    // Add assertions to check if the component renders as expected
  });

  test('adds a new owner when "Add another owner" is clicked', () => {
    const { getByText } = render(
      <ConfirmOwnersForm detailsProps={ownersData} />
    );
    const addButton = getByText("Add another owner");
    fireEvent.click(addButton);
    // Add assertions to check if a new owner is added
    const firstNameInputs = screen.getAllByLabelText("First name");
    fireEvent.change(firstNameInputs[1], { target: { value: "Ross" } });
  });

  // Add more test cases as needed
  test('removes a owner when "Remove" button is clicked', () => {
    render(<ConfirmOwnersForm detailsProps={ownersData} />);
    const addButton = screen.getByText("Add another owner");
    fireEvent.click(addButton);
    const removeButton = screen.getByLabelText("Remove");
    fireEvent.click(removeButton);
    // Add assertions to check if a owner is removed
  });

  
  test("updates owner fields when input values change", () => {
    render(<ConfirmOwnersForm detailsProps={ownersData} />);
    const lastNameInput = screen.getByLabelText("Last name");
    fireEvent.change(lastNameInput, { target: { value: "Gener" } });
    fireEvent.change(lastNameInput, { target: { value: "Gener" } });
    expect(lastNameInput).toHaveValue("Gener");
  });
  test("updates owner fields when input values change", () => {
    render(<ConfirmOwnersForm detailsProps={ownersData} />);
    const dateInput = screen.getByLabelText("Date of birth");
    fireEvent.change(dateInput, { target: { value: "01-01-2023" } });
    expect(dateInput).toHaveValue("01-01-2023");
  });


});
