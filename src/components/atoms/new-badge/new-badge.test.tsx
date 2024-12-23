import { render, screen } from "@testing-library/react";
import NewBadge from "./new-badge";

describe("NewBadge", () => {
  it("renders 'New' text", () => {
    render(<NewBadge />);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<NewBadge />);
    const badge = screen.getByText("New");
    expect(badge.tagName).toBe("SPAN");
  });

  it("applies correct positioning classes", () => {
    render(<NewBadge />);
    const badge = screen.getByText("New");
    expect(badge).toHaveClass("absolute", "top-3", "left-3");
  });

  it("applies correct styling classes", () => {
    render(<NewBadge />);
    const badge = screen.getByText("New");
    expect(badge).toHaveClass(
      "bg-stone-100",
      "text-cta-content-item",
      "py-2",
      "px-3",
      "rounded",
      "leading-none",
      "tracking-[0.4px]"
    );
  });
});
