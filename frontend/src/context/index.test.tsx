import React from "react";
import { render } from "@testing-library/react";
import { ContextProvider } from ".";

describe("ContextProvider", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <ContextProvider>
        <div>Hello World</div>
      </ContextProvider>
    );

    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
