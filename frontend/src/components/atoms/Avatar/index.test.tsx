import { render, screen } from "@testing-library/react";
import Avatars from "./index";

const url = "./../../../../public/images/avatarimg.svg";
describe("Avatar atom renders", () => {
  test("text", () => {
    render(<Avatars>AZ</Avatars>);
    const text = screen.getByText("AZ");
    expect(text).toBeInTheDocument();
  });
  test("image and its stylings", () => {
    render(<Avatars src={url} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", url);
    expect(image).toHaveStyle({
      width: "100%",
      height: "100%",
    });
  });
  it("circular variant correctly", () => {
    const { getByRole } = render(<Avatars variant="circular" src={url} />);
    const avatar = getByRole("img");
    expect(avatar).toHaveClass("MuiAvatar-img");
  });
  it("square variant correctly", () => {
    const { getByRole } = render(<Avatars variant="square" src={url}/>);
    const avatar = getByRole("img");
    expect(avatar).toHaveClass("MuiAvatar-img");
  });
  it("size prop correctly", () => {
    const { getByRole } = render(<Avatars size="40px" src={url}/>);
    const avatar = getByRole("img");
    expect(avatar).toHaveStyle("width: 100%");
    expect(avatar).toHaveStyle("height: 100%");
  });
  test("image", () => {
    render(<Avatars src={url} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", url);
  });
  test("image", () => {
    render(<Avatars src={url} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument() ;
  });

  test("with children", () => {
    render(<Avatars children="N" />);
    const avatar = screen.getByText("N");
    expect(avatar).toBeInTheDocument();
  });
});
