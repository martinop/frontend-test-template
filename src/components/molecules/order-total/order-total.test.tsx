import { render, screen } from "@testing-library/react";
import OrderTotal from "./order-total";
import { Game } from "@/types";

describe("OrderTotal", () => {
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

  it("renders order total text", () => {
    render(<OrderTotal items={mockItems} />);
    expect(screen.getByText("Order Total")).toBeInTheDocument();
  });

  it("calculates and displays correct total for multiple items", () => {
    render(<OrderTotal items={mockItems} />);
    // 29.99 + 59.99 = 89.98
    expect(screen.getByText("$89.98")).toBeInTheDocument();
  });

  it("displays zero when there are no items", () => {
    render(<OrderTotal items={[]} />);
    expect(screen.getByText("$0")).toBeInTheDocument();
  });

  it("calculates correct total for single item", () => {
    render(<OrderTotal items={[mockItems[0]]} />);
    expect(screen.getByText("$29.99")).toBeInTheDocument();
  });

  it("has correct styling", () => {
    render(<OrderTotal items={mockItems} />);
    const container = screen.getByText("Order Total").parentElement;
    expect(container).toHaveClass(
      "flex",
      "justify-between",
      "items-center",
      "text-xl",
      "font-bold"
    );
  });
});
