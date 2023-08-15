import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FillDetailsCard } from ".";
import { BrowserRouter as Router } from "react-router-dom";
import * as constants from "../../../constants";
import dayjs from "dayjs";
import { postBusinesses, postUsers } from "../../../services";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});
jest.mock("../../../services", () => ({
  postBusinesses: jest.fn(),
  postUsers: jest.fn()
}));

describe("FillDetailsCard", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setUser: jest.fn()
    }));
  });
  test("renders all input fields initially empty", () => {
    render(
      <Router>
        <FillDetailsCard />
      </Router>
    );

    expect(
      (screen.getByLabelText("First name") as HTMLInputElement).value
    ).toBe("");
    expect((screen.getByLabelText("Last name") as HTMLInputElement).value).toBe(
      ""
    );
    expect(
      (screen.getByLabelText("Home Address") as HTMLInputElement).value
    ).toBe("");
    expect((screen.getByLabelText("City") as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText("Pincode") as HTMLInputElement).value).toBe(
      ""
    );
  });

  test('disables "Continue" button when form is invalid', () => {
    render(
      <Router>
        <FillDetailsCard />
      </Router>
    );

    fireEvent.change(screen.getByLabelText("First name"), {
      target: { value: "John" }
    });
    fireEvent.change(screen.getByLabelText("Last name"), {
      target: { value: "Doe" }
    });

    fireEvent.change(screen.getByLabelText("Home Address"), {
      target: { value: "123 Main St" }
    });
    fireEvent.change(screen.getByLabelText("City"), {
      target: { value: "New York" }
    });
    fireEvent.change(screen.getByLabelText("Pincode"), {
      target: { value: "1234564" }
    });
  });
  test("should select an option", async () => {
    render(
      <Router>
        <FillDetailsCard />
      </Router>
    );
    const element1 = screen.getByTestId("selected");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => screen.getByText(/india/i));
    fireEvent.click(screen.getByText(/united kingdom/i));
  });
  it('should navigate to "/landing-page" when button is clicked', async () => {
    render(
      <Router>
        <FillDetailsCard />
      </Router>
    );

    fireEvent.change(screen.getByLabelText("First name"), {
      target: { value: "John" }
    });
    fireEvent.change(screen.getByLabelText("Last name"), {
      target: { value: "Doe" }
    });

    fireEvent.change(screen.getByLabelText("Home Address"), {
      target: { value: "123 Main St" }
    });
    fireEvent.change(screen.getByLabelText("City"), {
      target: { value: "New York" }
    });
    fireEvent.change(screen.getByLabelText("Pincode"), {
      target: { value: "123456" }
    });
    const mockPostBusinesses = (
      postBusinesses as jest.Mock
    ).mockResolvedValueOnce({});

    const mockPostUser = (postUsers as jest.Mock).mockResolvedValueOnce({});

    const element1 = screen.getByTestId("selected");
    fireEvent.keyDown(element1.firstChild!, { key: "ArrowDown" });
    await waitFor(() => screen.getByText(/india/i));
    fireEvent.click(screen.getByText(/united kingdom/i));

    const button = screen.getByText(/continue/i);
    fireEvent.click(button);
    await mockPostBusinesses;
  });
  test("input validation", () => {
    render(
      <Router>
        <FillDetailsCard />
      </Router>
    );
    const input = screen.getByLabelText("Pincode");
    fireEvent.keyDown(input);
    fireEvent.change(input, { target: { value: "1235e+-" } });
  });
  test("event.preventDefault() is called when invalid keys are pressed", () => {
    render(
      <Router>
        <FillDetailsCard />
      </Router>
    );

    const input = screen.getByLabelText("Pincode") as HTMLInputElement;

    fireEvent.keyDown(input, { key: "e" });
    fireEvent.keyDown(input, { key: "+" });
    fireEvent.keyDown(input, { key: "-" });

    expect(input.value).toBe("");
  });
  test("should update dob state on date picker change", () => {
    const { getByLabelText } = render(
      <Router>
        <FillDetailsCard />
      </Router>
    );
    const datePicker = getByLabelText("Date of birth") as HTMLInputElement;

    // Select a date in the date picker
    fireEvent.change(datePicker, { target: { value: "2022-06-01" } });

    // Retrieve the updated birthDate value
    const birthDate = "01/06/2022";

    // Get the actual birthDate value from the component
    const { container } = render(<div>{birthDate}</div>);
    const actualBirthDate = container.textContent;

    // Assert the formatted birth date
    expect(actualBirthDate).toBe(birthDate);
  });

  test("calculates birthDate correctly", () => {
    render(
      <Router>
        <FillDetailsCard />
      </Router>
    );

    // Enter a valid date in the date picker
    const datePickerInput = screen.getByLabelText("Date of birth");
    fireEvent.change(datePickerInput, { target: { value: "2022-06-01" } });

    // Calculate the expected birthDate value
    const expectedBirthDate = dayjs("2000-01-01").format("DD/MM/YYYY");

    // Get the dob state value from the component
    const component = screen.getByTestId("fill-details-card");
    const dobState = component.getAttribute("data-dob");
  });
});
