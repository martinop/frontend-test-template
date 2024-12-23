import { render, screen } from "@testing-library/react";
import BackCatalogBtn from "./back-catalog-btn";

describe("BackCatalogBtn", () => {
  it("renders link with correct href", () => {
    render(<BackCatalogBtn />);
    const link = screen.getByRole("link", { name: /back to catalog/i });
    expect(link).toHaveAttribute("href", "/");
  });

  it("displays correct text", () => {
    render(<BackCatalogBtn />);
    expect(screen.getByText("Back to Catalog")).toBeInTheDocument();
  });
});
