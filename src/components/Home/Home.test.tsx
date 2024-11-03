import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import HomeComponent from "./Home";
import React from "react";

jest.mock("../common/FadeIn.tsx", () => {
  const MockFadeIn = ({ children }: { children: React.ReactNode }) => <>{children}</>;
  MockFadeIn.displayName = "MockFadeIn";
  return MockFadeIn;
});

describe("Testing Home Page", () => {
  beforeEach(() => {
    render(<HomeComponent />);
  });

  it("renders Buttons links", () => {
    const linkLiveScores = screen.getByRole("link", { name: /explore live scores/i });
    expect(linkLiveScores).toBeInTheDocument();

    const linkGetStarted = screen.getByRole("link", { name: /get started/i });
    expect(linkGetStarted).toBeInTheDocument();
  });
});
