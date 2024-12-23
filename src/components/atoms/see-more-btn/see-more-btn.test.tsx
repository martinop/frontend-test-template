import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter, useSearchParams } from "next/navigation";
import SeeMoreBtn from "./see-more-btn";

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: mockPush,
});

describe("SeeMoreBtn", () => {
  const mockClassName = "test-class";

  it("renders with correct text and class", () => {
    render(<SeeMoreBtn className={mockClassName} />);
    const button = screen.getByText("See More");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(mockClassName);
  });

  it("increments page parameter when clicked with scroll disabled", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => "1",
      toString: () => "page=1",
    });

    render(<SeeMoreBtn className={mockClassName} />);
    fireEvent.click(screen.getByText("See More"));

    expect(mockPush).toHaveBeenCalledWith("/?page=2", { scroll: false });
  });

  it("preserves existing query parameters when updating page with scroll disabled", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => "1",
      toString: () => "page=1&genre=action",
    });

    render(<SeeMoreBtn className={mockClassName} />);
    fireEvent.click(screen.getByText("See More"));

    expect(mockPush).toHaveBeenCalledWith("/?page=2&genre=action", {
      scroll: false,
    });
  });
});
