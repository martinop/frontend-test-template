import { render, screen } from "@testing-library/react";
import GameGrid from "./game-grid";
import { Game } from "@/types";

jest.mock("../../molecules/game-card/game-card", () => {
  return function MockGameCard({ game }: { game: Game }) {
    return <div data-testid={`game-card-${game.id}`}>{game.name}</div>;
  };
});

describe("GameGrid", () => {
  const mockGames: Game[] = [
    {
      id: "1",
      name: "Game 1",
      genre: "Action",
      price: 59.99,
      image: "/image1.jpg",
      isNew: false,
      description: "Description",
    },
    {
      id: "2",
      name: "Game 2",
      genre: "Adventure",
      price: 49.99,
      image: "/image2.jpg",
      isNew: false,
      description: "Description",
    },
    {
      id: "3",
      name: "Game 3",
      genre: "RPG",
      price: 69.99,
      image: "/image3.jpg",
      isNew: false,
      description: "Description",
    },
  ];

  it("renders the correct number of GameCard components", () => {
    render(<GameGrid games={mockGames} />);

    mockGames.forEach((game) => {
      expect(screen.getByTestId(`game-card-${game.id}`)).toBeInTheDocument();
    });
  });

  it("passes the correct game prop to each GameCard", () => {
    render(<GameGrid games={mockGames} />);

    mockGames.forEach((game) => {
      expect(screen.getByText(game.name)).toBeInTheDocument();
    });
  });

  it("has the correct grid layout classes", () => {
    render(<GameGrid games={mockGames} />);

    const grid = screen.getByTestId("game-card-1").parentElement;
    expect(grid).toHaveClass(
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full"
    );
  });
});
