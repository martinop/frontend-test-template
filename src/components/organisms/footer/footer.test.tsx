import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  it("renders the footer with the correct structure", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("w-full bg-neutral-700");
  });

  it("contains a link to the home page", () => {
    render(<Footer />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });

  it("displays the Apply Digital logo", () => {
    render(<Footer />);

    const logo = screen.getByAltText("Apply Digital");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/apply-digital-logo.svg");
    expect(logo).toHaveAttribute("width", "170");
    expect(logo).toHaveAttribute("height", "44");
  });

  it("has the correct layout classes", () => {
    render(<Footer />);

    const container = screen.getByRole("contentinfo").firstChild as HTMLElement;
    expect(container).toHaveClass(
      "container mx-auto px-6 md:px-4 flex justify-center py-16"
    );
  });
});
