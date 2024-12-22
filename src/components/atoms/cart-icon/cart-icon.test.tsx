import { render } from "@testing-library/react";
import CartIcon from "./cart-icon";

describe("CartIcon", () => {
  it("renders the SVG icon correctly", () => {
    const { container } = render(<CartIcon />);
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    expect(svg).toHaveClass("text-neutral-dark");
  });

  it("contains the correct path element", () => {
    const { container } = render(<CartIcon />);
    const path = container.querySelector("path");

    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute("fill", "currentColor");
    expect(path).toHaveAttribute("d");
  });
});
