import React from "react";
import { fireEvent, render,screen} from "@testing-library/react";
import { NavbarPageTemplate } from ".";
import { MemoryRouter } from "react-router-dom";

describe("NavBarTemplate", () => {
  it("should render children, leftnavbar, and header", () => {
    const children = <div>Mock Children</div>;
    const navbar = <div>Mock Navbar</div>;

    const { getByText } = render(
      <MemoryRouter><NavbarPageTemplate navbar={navbar}>{children}</NavbarPageTemplate></MemoryRouter>
    );

    expect(getByText("Mock Children")).toBeInTheDocument();
    expect(getByText("Mock Navbar")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("button1"));
  });
});
