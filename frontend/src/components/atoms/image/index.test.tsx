import React from "react";
import { render } from "@testing-library/react";
import { Image } from ".";
import { PERSON, SRC_IMG } from "../../../constants";

describe("Image", () => {
  test("renders with correct src and alt attributes", () => {
    const { getByAltText } = render(<Image src={SRC_IMG} alt={PERSON} />);
    const imageElement = getByAltText(PERSON);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", SRC_IMG);
    expect(imageElement).toHaveAttribute("alt", PERSON);
  });
});
