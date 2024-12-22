import { render, screen, fireEvent } from "@testing-library/react";
import AddToCart from "./add-to-cart";
import { useCart } from "@/contexts/cart-context";
import { Game } from "@/types";

jest.mock("@/contexts/cart-context", () => ({
  useCart: jest.fn(),
}));

jest.mock("@/components/atoms/button", () => {
  return function MockButton({
    children,
    ...props
  }: React.PropsWithChildren<any>) {
    return <button {...props}>{children}</button>;
  };
});

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  genre: "Action",
  price: 59.99,
  image: "/test-image.jpg",
  description: "Description",
  isNew: false,
};

describe("AddToCart", () => {
  const mockAddItem = jest.fn();
  const mockRemoveItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Add to Cart" button when game is not in cart', () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [],
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    });

    render(<AddToCart game={mockGame} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("variant", "primary");
  });

  it('renders "Remove" button when game is in cart', () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [mockGame],
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    });

    render(<AddToCart game={mockGame} />);

    const button = screen.getByRole("button", { name: /remove/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("variant", "secondary");
  });

  it('calls addItem when "Add to Cart" is clicked', () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [],
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    });

    render(<AddToCart game={mockGame} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockAddItem).toHaveBeenCalledWith(mockGame);
    expect(mockRemoveItem).not.toHaveBeenCalled();
  });

  it('calls removeItem when "Remove" is clicked', () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [mockGame],
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    });

    render(<AddToCart game={mockGame} />);

    const button = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(button);

    expect(mockRemoveItem).toHaveBeenCalledWith(mockGame.id);
    expect(mockAddItem).not.toHaveBeenCalled();
  });
});
