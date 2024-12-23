import { render, screen } from "@testing-library/react";
import CartItemsList from "./cart-items-list";
import { useCart } from "@/contexts/cart-context";
import { Game } from "@/types";

jest.mock("@/contexts/cart-context", () => ({
  useCart: jest.fn(),
}));

describe("CartItemsList", () => {
  const mockItems: Game[] = [
    {
      id: "1",
      name: "Game 1",
      price: 29.99,
      description: "Description 1",
      genre: "Action",
      image: "image1.jpg",
      isNew: false,
    },
    {
      id: "2",
      name: "Game 2",
      price: 59.99,
      description: "Description 2",
      genre: "RPG",
      image: "image2.jpg",
      isNew: true,
    },
  ];

  const mockRemoveItem = jest.fn();

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      items: mockItems,
      removeItem: mockRemoveItem,
    });
  });

  it("renders all cart items from context", () => {
    render(<CartItemsList />);

    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
  });

  it("renders nothing when cart is empty", () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [],
      removeItem: mockRemoveItem,
    });

    const { container } = render(<CartItemsList />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
