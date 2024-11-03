import "@testing-library/dom";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Testing Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders quick links", () => {
    const linkFixtures = screen.getByRole("link", { name: /fixtures/i });
    expect(linkFixtures).toBeInTheDocument();

    const linkLiveScore = screen.getByRole("link", { name: /livescore/i });
    expect(linkLiveScore).toBeInTheDocument();

    const linkAboutUs = screen.getByRole("link", { name: /about us/i });
    expect(linkAboutUs).toBeInTheDocument();
  });

  it("renders social links", () => {
    const facebookLink = screen.getAllByRole("link").find((link) => link.getAttribute("href")?.includes("facebook.com"));
    expect(facebookLink).toBeInTheDocument();

    const xLink = screen.getAllByRole("link").find((link) => link.getAttribute("href")?.includes("x.com"));
    expect(xLink).toBeInTheDocument();

    const instagramLink = screen.getAllByRole("link").find((link) => link.getAttribute("href")?.includes("instagram.com"));
    expect(instagramLink).toBeInTheDocument();
  });
});
