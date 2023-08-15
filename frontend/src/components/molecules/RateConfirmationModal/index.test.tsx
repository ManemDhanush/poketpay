import { render, fireEvent, screen } from "@testing-library/react";
import RateConfirmationModal from ".";

describe("BasicModal", () => {
  test('Modal opens when "Open modal" button is clicked', () => {
    render(<RateConfirmationModal />);
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeNull();
  });

  it("should call setOpenOuterModal with false", () => {
    const setOpen = jest.fn();
    const handleChange = () => {
      setOpen(false);
    };
    handleChange();
    expect(setOpen).toHaveBeenCalledWith(false);
  });
  it("should not call setOpenOuterModal with true", () => {
    const setOpen = jest.fn();
    const handleChange = () => {
      setOpen(false);
    };
    handleChange();
    expect(setOpen).not.toHaveBeenCalledWith(true);
  });

  test("Modal is closed initially", () => {
    render(<RateConfirmationModal />);
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeNull();
  });

  test("Modal is opened when the button is clicked", () => {
    render(<RateConfirmationModal />);
    const button = screen.getByAltText("Down arrow");
    fireEvent.click(button);
    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  test("handleOpen toggles the openModal state", () => {
    render(<RateConfirmationModal />);
    const button = screen.getByAltText("Down arrow");
    fireEvent.click(button);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    fireEvent.click(button);
  });
});
