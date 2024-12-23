import { render, screen } from "@testing-library/react";
import CartHeader from "./cart-header";
import { useCart } from "@/contexts/cart-context";

jest.mock("@/contexts/cart-context", () => ({
  useCart: jest.fn(),
}));

describe("CartHeader", () => {
  it("displays correct heading", () => {
    (useCart as jest.Mock).mockReturnValue({ items: [] });
    render(<CartHeader />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Your Cart"
    );
  });

  it("displays 'item' in singular when cart has 1 item", () => {
    (useCart as jest.Mock).mockReturnValue({ items: [{ id: "1" }] });
    render(<CartHeader />);

    expect(screen.getByText("1 item")).toBeInTheDocument();
  });

  it("displays 'items' in plural when cart has multiple items", () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [{ id: "1" }, { id: "2" }],
    });
    render(<CartHeader />);

    expect(screen.getByText("2 items")).toBeInTheDocument();
  });

  it("displays '0 items' when cart is empty", () => {
    (useCart as jest.Mock).mockReturnValue({ items: [] });
    render(<CartHeader />);

    expect(screen.getByText("0 items")).toBeInTheDocument();
  });

  it("has correct styling classes", () => {
    (useCart as jest.Mock).mockReturnValue({ items: [] });
    render(<CartHeader />);

    const container = screen.getByRole("heading").parentElement;
    expect(container).toHaveClass("my-12");

    const heading = screen.getByRole("heading");
    expect(heading).toHaveClass(
      "text-4xl",
      "font-bold",
      "mb-3",
      "text-neutral-dark"
    );

    const itemCount = screen.getByText("0 items");
    expect(itemCount).toHaveClass("text-primary", "text-2xl");
  });
});
