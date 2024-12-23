import { render, screen, act } from "@testing-library/react";
import GameCard from "./game-card";
import { Game } from "@/types";

jest.mock("@/components/atoms/add-to-cart-btn", () => {
  return function MockAddToCart() {
    return <button data-testid="add-to-cart">Add to Cart</button>;
  };
});

jest.mock("next/dynamic", () => () => {
  return function MockDynamicComponent(props: any) {
    return <div data-testid="add-to-cart">{props.children}</div>;
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

  const renderGameCard = async (game: Game) => {
    let rendered;
    await act(async () => {
      rendered = render(<GameCard game={game} />);
    });
    return rendered;
  };

  it("renders game information correctly", async () => {
    await renderGameCard(mockGame);

    expect(screen.getByRole("img")).toHaveAttribute("alt", mockGame.name);
    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument();
  });

  it("renders the AddToCart component", async () => {
    await renderGameCard(mockGame);

    const addToCartButton = screen.getByTestId("add-to-cart");
    expect(addToCartButton).toBeInTheDocument();
  });

  it("displays 'New' tag for new games", async () => {
    const newGame = { ...mockGame, isNew: true };
    await renderGameCard(newGame);

    const newTag = screen.getByText("New");
    expect(newTag).toBeInTheDocument();
  });

  it("does not display 'New' tag for non-new games", async () => {
    await renderGameCard(mockGame);

    const newTag = screen.queryByText("New");
    expect(newTag).not.toBeInTheDocument();
  });
});
