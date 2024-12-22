import { render, screen, fireEvent } from "@testing-library/react";
import GenreSelect from "./genre-select";
import { GenreProvider } from "@/contexts/genre-context";
import { useRouter, useSearchParams } from "next/navigation";

describe("GenreSelect", () => {
  const mockPush = jest.fn();
  const mockSearchParams = new URLSearchParams();
  const mockGenres = ["Action", "Drama", "Romance", "Comedy"];

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  const renderWithContext = (component: React.ReactNode) => {
    return render(
      <GenreProvider genres={mockGenres}>{component}</GenreProvider>
    );
  };

  it("renders the genre select with correct options", () => {
    renderWithContext(<GenreSelect />);

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(mockGenres.length + 1);

    expect(options[0]).toHaveValue("");
    expect(options[0]).toHaveTextContent("All");

    mockGenres.forEach((genre, index) => {
      expect(options[index + 1]).toHaveValue(genre);
      expect(options[index + 1]).toHaveTextContent(genre);
    });
  });

  it("calls router.push with correct params when genre is selected", () => {
    renderWithContext(<GenreSelect />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: mockGenres[0] } });

    expect(mockPush).toHaveBeenCalledWith(`/?genre=${mockGenres[0]}&page=1`);
  });

  it('removes genre param when "All" is selected', () => {
    renderWithContext(<GenreSelect />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "" } });

    expect(mockPush).toHaveBeenCalledWith("/?page=1");
  });

  it("has the correct layout and styling", () => {
    renderWithContext(<GenreSelect />);

    const container = screen.getByText("Genre").parentElement;
    expect(container).toHaveClass("flex items-center");

    const genreLabel = screen.getByText("Genre");
    expect(genreLabel).toHaveClass(
      "text-xl text-gray-medium font-bold pr-6 border-r border-stroke-secondary mr-6"
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("w-[230px] px-4 h-14 text-xl text-primary");
  });
});
