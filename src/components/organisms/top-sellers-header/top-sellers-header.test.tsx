import { render, screen } from "@testing-library/react";
import TopSellersHeader from "./top-sellers-header";

jest.mock("@/components/molecules/genre-select", () => {
  return function MockGenreSelect() {
    return <div data-testid="genre-select">Genre Select Mock</div>;
  };
});

describe("TopSellersHeader", () => {
  it("renders the header text correctly", () => {
    render(<TopSellersHeader />);
    const headerText = screen.getByText("Top Sellers");
    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveClass("mb-12 text-gray-medium text-4xl font-bold");
  });

  it("renders the GenreSelect component", () => {
    render(<TopSellersHeader />);
    const genreSelect = screen.getByTestId("genre-select");
    expect(genreSelect).toBeInTheDocument();
  });

  it("has the correct layout classes", () => {
    render(<TopSellersHeader />);
    const container = screen.getByText("Top Sellers").closest("div");
    expect(container).toHaveClass("py-12 border-b border-stroke-tertiary");
  });
});
