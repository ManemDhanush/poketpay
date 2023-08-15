import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchForBusiness from ".";

describe("Search For Business Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <SearchForBusiness />
      </Router>
    );
  });
  test("renders search field", () => {
    const searchField = screen.getByPlaceholderText("Search your business");
    expect(searchField).toBeInTheDocument();
  });

  test("displays menu when search value matches", () => {
    const searchField = screen.getByPlaceholderText("Search your business");
    fireEvent.change(searchField, { target: { value: "ze" } });
    const menuItems = screen.getAllByTestId("menu-item");
    fireEvent.click(menuItems[0]);
  });
  test("displays menu when search icon clicks", () => {
    const searchField = screen.getByTestId("searchicon");
    fireEvent.click(searchField);
    const menuItems = screen.getAllByTestId("menu-item");
    fireEvent.click(menuItems[0]);
  });

  test("listbox opens when the input field is clicked", () => {
    const searchButton = screen.getByTestId("searchicon");
    fireEvent.click(searchButton);
    const searchField = screen.getByTestId("searchvalue");
    fireEvent.click(searchField);
  });
  test("hides menu when search value does not match", () => {
    const searchField = screen.getByPlaceholderText("Search your business");
    fireEvent.change(searchField, { target: { value: "abc" } });
    fireEvent.click(screen.getByTestId("searchfield")); // Simulate clicking on the search field
    const menuItems = screen.queryAllByTestId("menu-item");
    expect(menuItems.length).toBe(0);
  });
});
