import { render, screen } from "@testing-library/react";
import GamePrice from "./game-price";

describe("GamePrice", () => {
  it("renders price with correct format", () => {
    render(<GamePrice price={59.99} />);
    expect(screen.getByText("$59.99")).toBeInTheDocument();
  });

  it("applies default styling", () => {
    render(<GamePrice price={29.99} />);
    const priceElement = screen.getByText("$29.99");
    expect(priceElement).toHaveClass(
      "text-xl font-bold text-item-fill tracking-[0.4px]"
    );
  });

  it("applies additional className when provided", () => {
    render(<GamePrice price={19.99} className="custom-class" />);
    const priceElement = screen.getByText("$19.99");
    expect(priceElement).toHaveClass("custom-class");
    expect(priceElement).toHaveClass(
      "text-xl font-bold text-item-fill tracking-[0.4px]"
    );
  });
});
