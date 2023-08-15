import { render, screen, fireEvent } from "@testing-library/react";
import ModalWindow from ".";

describe("ModalWindow", () => {
  const mockPopUpWindow = <div>Popup Window Content</div>;
  const mockCardWidth = "300px";
  const mockCardHeight = "200px";
  const mockTop = "50%";
  const mockLeft = "50%";

  it("renders the component and opens the modal on button click", () => {
    render(
      <ModalWindow
        popUpWindow={mockPopUpWindow}
        cardWidth={mockCardWidth}
        cardHeight={mockCardHeight}
        top={mockTop}
        left={mockLeft}
      />
    );

    const openButton = screen.getByRole("button", { name: "Open modal" });
    expect(openButton).toBeInTheDocument();

    fireEvent.click(openButton);

    const modalContent = screen.getByText("Popup Window Content");
    expect(modalContent).toBeInTheDocument();
  });

  it("closes the modal when the close button is clicked", () => {
    render(
      <ModalWindow
        popUpWindow={mockPopUpWindow}
        cardWidth={mockCardWidth}
        cardHeight={mockCardHeight}
        top={mockTop}
        left={mockLeft}
        needCloseButton={true}
      />
    );

    const openButton = screen.getByRole("button", { name: "Open modal" });
    fireEvent.click(openButton);

    const closeButton = screen.getByRole("button", { name: "Close modal" });
    fireEvent.click(closeButton);

    const modalContent = screen.queryByText("Popup Window Content");
    expect(modalContent).not.toBeInTheDocument();
  });
});
