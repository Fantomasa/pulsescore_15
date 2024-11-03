import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

jest.mock("../common/NavLink", () => ({
  __esModule: true,
  default: ({ href, currentPath, children }: { href: string; currentPath: string; children: React.ReactNode }) => (
    <a href={href} data-current-path={currentPath}>
      {children}
    </a>
  )
}));

describe("Nav Component", () => {
  it("renders all navigation links", () => {
    render(<Nav />);

    const fixturesLink = screen.getByRole("link", { name: /fixtures/i });
    expect(fixturesLink).toBeInTheDocument();
    expect(fixturesLink).toHaveAttribute("href", "/fixtures");

    const liveScoreLink = screen.getByRole("link", { name: /live/i });
    expect(liveScoreLink).toBeInTheDocument();
    expect(liveScoreLink).toHaveAttribute("href", "/live-score?sport=football");

    const aboutUsLink = screen.getByRole("link", { name: /about us/i });
    expect(aboutUsLink).toBeInTheDocument();
    expect(aboutUsLink).toHaveAttribute("href", "/about-us");
  });
});
