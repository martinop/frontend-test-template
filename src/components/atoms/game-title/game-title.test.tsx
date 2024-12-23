import { render, screen } from "@testing-library/react";
import GameTitle from "./game-title";

describe("GameTitle", () => {
  it("renders title text correctly", () => {
    const title = "The Last of Us";
    render(<GameTitle title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders with correct heading level", () => {
    render(<GameTitle title="God of War" />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
  });

  it("applies correct styling", () => {
    render(<GameTitle title="Elden Ring" />);
    const titleElement = screen.getByText("Elden Ring");
    expect(titleElement).toHaveClass(
      "font-bold text-lg leading-tight text-item-fill tracking-[0.4px]"
    );
  });
});
