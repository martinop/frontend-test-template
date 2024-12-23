import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./cart-item";
import { Game } from "@/types";

describe("CartItem", () => {
  const mockGame: Game = {
    id: "1",
    name: "Test Game",
    description: "Game description",
    genre: "Action",
    price: 59.99,
    image: "/test-image.jpg",
    isNew: false,
  };

  const mockOnRemove = jest.fn();

  it("calls onRemove with correct game id when remove button is clicked", () => {
    render(<CartItem game={mockGame} onRemove={mockOnRemove} />);

    const removeButton = screen.getByRole("button");
    fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledWith(mockGame.id);
  });

  it("renders game information correctly", () => {
    render(<CartItem game={mockGame} onRemove={mockOnRemove} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("test-image.jpg")
    );
    expect(image).toHaveAttribute("alt", mockGame.name);

    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(mockGame.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument();
  });

  it("shows New badge only for new games", () => {
    render(<CartItem game={mockGame} onRemove={mockOnRemove} />);
    expect(screen.queryByText("New")).not.toBeInTheDocument();

    const newGame = { ...mockGame, isNew: true };
    render(<CartItem game={newGame} onRemove={mockOnRemove} />);
    expect(screen.getByText("New")).toBeInTheDocument();
  });
});
