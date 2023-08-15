import { fireEvent, render, screen } from "@testing-library/react";
import IconInput from ".";
import { MemoryRouter } from "react-router-dom";
import * as constants from "../../../constants";

jest.mock("../../../constants", () => {
  return {
    ...jest.requireActual("../../../constants"),
    useAppContext: jest.fn()
  };
});
describe("IconTypo Card Component", () => {
  beforeEach(() => {
    (constants.useAppContext as jest.Mock).mockImplementation(() => ({
      setUser: jest.fn()
    }));})
  test("renders MyTextField with a label", () => {
    render(
      <MemoryRouter>
        <IconInput label="Mobile Number" />
      </MemoryRouter>
    );
    const label = "Mobile Number";
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
  test("input validation when +  sign is not given", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <IconInput label="Mobile number" defaultValue="1234567890" />
      </MemoryRouter>
    );

    const input = getByLabelText("Mobile number");
    fireEvent.change(input, { target: { value: "123456789000" } });
  });
  test('checking for the value changing', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <IconInput label="Phone Number" defaultValue="" />
      </MemoryRouter>
    );

    const input = getByLabelText("Phone Number") as HTMLInputElement;
    fireEvent.keyDown(input)
    fireEvent.change(input, { target: { value: "1234567890" } });

    fireEvent.click(screen.getByTestId("button"));
  });
  test('input value changing for + and e', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <IconInput label="Phone Number" defaultValue="" />
      </MemoryRouter>
    );

    const input = getByLabelText("Phone Number") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "12345678+e-" } });

    fireEvent.click(screen.getByTestId("button"));
  });
  test("should change the input", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <IconInput label="Phone Number" defaultValue="" />
      </MemoryRouter>
    );

    const input = getByLabelText("Phone Number") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "abc" } });

    fireEvent.click(screen.getByTestId("button"));
  });
  test("event.preventDefault() is called when invalid keys are pressed", () => {
    render(
      <MemoryRouter>
        <IconInput label="Phone Number" defaultValue="" />
      </MemoryRouter>
    );
  
    const input = screen.getByLabelText("Phone Number")  as HTMLInputElement;
  
    fireEvent.keyDown(input, { key: "e" });
    fireEvent.keyDown(input, { key: "+" });
    fireEvent.keyDown(input, { key: "-" });
  
   
    expect(input.value).toBe(""); 
  });
});
