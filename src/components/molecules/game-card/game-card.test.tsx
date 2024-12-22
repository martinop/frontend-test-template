import { render, screen } from "@testing-library/react";
import GameCard from "./game-card";
import { Game } from "@/types";

jest.mock("@/components/atoms/add-to-cart-btn", () => {
  return function MockAddToCart() {
    return <button data-testid="add-to-cart">Add to Cart</button>;
  };
});

describe("GameCard", () => {
  const mockGame: Game = {
    id: "1",
    name: "Test Game",
    description: "Description",
    genre: "Action",
    price: 59.99,
    image: "/test-image.jpg",
    isNew: false,
  };

  it("renders game information correctly", () => {
    render(<GameCard game={mockGame} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockGame.image);
    expect(image).toHaveAttribute("alt", mockGame.name);

    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument();
  });

  it("renders the AddToCart component", () => {
    render(<GameCard game={mockGame} />);

    const addToCartButton = screen.getByTestId("add-to-cart");
    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).toHaveTextContent("Add to Cart");
  });

  it("has the correct styling", () => {
    render(<GameCard game={mockGame} />);

    const container = screen.getByText(mockGame.name).closest(".p-6");
    expect(container).toHaveClass(
      "p-6 border-[0.5px] border-stroke-alternative bg-surface-primary rounded-2xl flex flex-col justify-between gap-5"
    );

    const imageContainer = screen.getByRole("img").parentElement;
    expect(imageContainer).toHaveClass("relative h-60");

    const image = screen.getByRole("img");
    expect(image).toHaveClass("rounded-2xl object-cover");

    const genre = screen.getByText(mockGame.genre);
    expect(genre).toHaveClass("text-neutral-500 uppercase font-bold mb-3");

    const nameAndPrice = screen.getByText(mockGame.name).closest("div");
    expect(nameAndPrice).toHaveClass(
      "flex justify-between gap-x-12 items-center text-item-fill tracking-[0.4px]"
    );
  });

  it("displays 'New' tag for new games", () => {
    const newGame = { ...mockGame, isNew: true };
    render(<GameCard game={newGame} />);

    const newTag = screen.getByText("New");
    expect(newTag).toBeInTheDocument();
    expect(newTag).toHaveClass(
      "absolute top-3 left-3 bg-stone-100 text-cta-content-item py-2 px-3 rounded leading-none tracking-[0.4px]"
    );
  });

  it("does not display 'New' tag for non-new games", () => {
    render(<GameCard game={mockGame} />);

    const newTag = screen.queryByText("New");
    expect(newTag).not.toBeInTheDocument();
  });
});
