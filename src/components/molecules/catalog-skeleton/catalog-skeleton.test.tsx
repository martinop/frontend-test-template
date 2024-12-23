import { render, screen } from "@testing-library/react";
import CatalogSkeleton from "./catalog-skeleton";

describe("CatalogSkeleton Component", () => {
  it("renders the main container", () => {
    render(<CatalogSkeleton />);
    const container = screen.getByRole("main", { name: "catalog skeleton" });
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("w-full container mx-auto px-4 pb-24");
  });

  it("renders header skeleton elements", () => {
    render(<CatalogSkeleton />);
    const headerSkeletons = screen.getAllByLabelText(/header skeleton/i);
    expect(headerSkeletons.length).toBe(3);
  });

  it("renders 6 card skeletons", () => {
    render(<CatalogSkeleton />);
    const cardSkeletons = screen.getAllByLabelText(/^card skeleton \d+$/i);
    expect(cardSkeletons.length).toBe(6);
  });
});
