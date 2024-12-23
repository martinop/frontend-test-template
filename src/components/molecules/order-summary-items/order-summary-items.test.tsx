import { render, screen } from "@testing-library/react";
import OrderSummaryItems from "./order-summary-items";
import { Game } from "@/types";

describe("OrderSummaryItems", () => {
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

  it("renders all items with correct names and prices", () => {
    render(<OrderSummaryItems items={mockItems} />);

    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
  });

  it("renders nothing when items array is empty", () => {
    const { container } = render(<OrderSummaryItems items={[]} />);
    const itemsContainer = container.firstChild;
    expect(itemsContainer).toBeEmptyDOMElement();
  });

  it("has correct styling for container and items", () => {
    render(<OrderSummaryItems items={mockItems} />);

    const container = screen.getByText("Game 1").parentElement?.parentElement;
    expect(container).toHaveClass("space-y-3", "py-5");

    const itemDiv = screen.getByText("Game 1").parentElement;
    expect(itemDiv).toHaveClass(
      "flex",
      "justify-between",
      "text-primary",
      "text-lg",
      "tracking-[0.4px]",
      "gap-x-8"
    );
  });
});
