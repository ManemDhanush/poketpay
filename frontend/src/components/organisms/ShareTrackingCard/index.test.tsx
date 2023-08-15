import { render, screen } from "@testing-library/react";
import ShareTrackingCard from ".";
import { SHARETRACKINGCARDCONTENTS } from "./ShareTrackingCardConstants";

describe("ShareTrackingCard", () => {
  it("renders the title correctly", () => {
    render(<ShareTrackingCard />);
    const titleElement = screen.getByText(SHARETRACKINGCARDCONTENTS.title);
    expect(titleElement).toBeInTheDocument();
  });
  it("renders the share track image alt correctly", () => {
    render(<ShareTrackingCard />);
    const shareTrackImage = screen.getByAltText(
      SHARETRACKINGCARDCONTENTS.shareTrackImageAlt
    );
    expect(shareTrackImage).toBeInTheDocument();
  });
  it("renders the email icon alt correctly", () => {
    render(<ShareTrackingCard />);
    const emailIcon = screen.getByAltText(
      SHARETRACKINGCARDCONTENTS.emailIconAlt
    );
    expect(emailIcon).toBeInTheDocument();
  });

  it("renders the copy link icon alt correctly", () => {
    render(<ShareTrackingCard />);

    const copyLinkIcon = screen.getByAltText(
      SHARETRACKINGCARDCONTENTS.copyLinkIconAlt
    );
    expect(copyLinkIcon).toBeInTheDocument();
  });
  it("renders the footer content correctly", () => {
    render(<ShareTrackingCard />);
    const footerContentElement = screen.getByText(
      SHARETRACKINGCARDCONTENTS.footerContent
    );
    expect(footerContentElement).toBeInTheDocument();
  });
});
