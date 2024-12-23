import { render, screen } from "@testing-library/react";
import GenreText from "./genre-text";

describe("GenreText", () => {
  it("renders genre text correctly", () => {
    render(<GenreText genre="Action" />);
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("renders as a paragraph element", () => {
    render(<GenreText genre="RPG" />);
    const genreElement = screen.getByText("RPG");
    expect(genreElement.tagName).toBe("P");
  });

  it("applies correct styling classes", () => {
    render(<GenreText genre="Adventure" />);
    const genreElement = screen.getByText("Adventure");
    expect(genreElement).toHaveClass(
      "text-neutral-500",
      "uppercase",
      "font-bold",
      "mb-3"
    );
  });
});
