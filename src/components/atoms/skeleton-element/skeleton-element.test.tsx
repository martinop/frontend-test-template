import { render, screen } from "@testing-library/react";
import SkeletonElement from "./skeleton-element";

describe("SkeletonElement", () => {
  it("renders with default classes", () => {
    render(<SkeletonElement />);
    const element = screen.getByRole("presentation");

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("bg-gray-200", "rounded", "animate-pulse");
  });

  it("applies additional classes when provided", () => {
    render(<SkeletonElement className="w-10 h-10" />);
    const element = screen.getByRole("presentation");

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("bg-gray-200", "rounded", "animate-pulse");
    expect(element).toHaveClass("w-10", "h-10");
  });
});
