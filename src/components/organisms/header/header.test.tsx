import { render, screen } from "@testing-library/react";
import Header from "./header";

jest.mock("@/components/atoms/cart-icon", () => {
  return function MockCartIcon() {
    return <div data-testid="cart-icon" />;
  };
});

describe("Header", () => {
  it("renders the header with correct elements", () => {
    render(<Header />);

    const logoLink = screen.getByText("GamerShop");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    const cartLink = screen.getByLabelText("Shopping cart");
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute("href", "/cart");

    const cartIcon = screen.getByTestId("cart-icon");
    expect(cartIcon).toBeInTheDocument();
  });

  it("has the correct sticky positioning", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("sticky top-0");
  });

  it("has the correct background color", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("bg-surface-secondary");
  });
});
