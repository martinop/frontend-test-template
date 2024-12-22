import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameCard from "./game-card";
import { Game } from "@/types";

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

  it("has the correct styling", () => {
    render(<GameCard game={mockGame} />);

    const container = screen.getByText(mockGame.name).closest(".p-6");
    expect(container).toHaveClass(
      "p-6 border-[0.5px] border-stroke-alternative bg-surface-primary rounded-2xl"
    );

    const imageContainer = screen.getByRole("img").parentElement;
    expect(imageContainer).toHaveClass("relative h-60");

    const image = screen.getByRole("img");
    expect(image).toHaveClass("rounded-2xl object-cover");

    const genre = screen.getByText(mockGame.genre);
    expect(genre).toHaveClass("text-neutral-500 uppercase font-bold mb-3");

    const nameAndPrice = screen.getByText(mockGame.name).closest("div");
    expect(nameAndPrice).toHaveClass(
      "mb-5 flex justify-between gap-x-12 items-center text-item-fill tracking-[0.4px]"
    );
  });
});
