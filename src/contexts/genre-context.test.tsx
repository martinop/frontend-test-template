import { render, screen } from "@testing-library/react";
import { GenreProvider, useGenreContext } from "./genre-context";

const TestComponent = () => {
  const { genres } = useGenreContext();
  return (
    <div>
      {genres.map((genre) => (
        <span key={genre}>{genre}</span>
      ))}
    </div>
  );
};

describe("GenreContextProvider", () => {
  it("provides the genres to child components", () => {
    const testGenres = ["Action", "Comedy", "Drama"];
    render(
      <GenreProvider genres={testGenres}>
        <TestComponent />
      </GenreProvider>
    );

    testGenres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it("throws an error when useGenreContext is used outside of GenreProvider", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow("useGenreContext must be used within a GenreProvider");

    consoleSpy.mockRestore();
  });
});
