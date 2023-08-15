import { render } from "@testing-library/react";
import CreateAccount from ".";
import { MemoryRouter  } from "react-router-dom";

describe("CreateAccount component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CreateAccount/>
      </MemoryRouter>
    );
  });
  test("renders without error", () => { 
  });
});
