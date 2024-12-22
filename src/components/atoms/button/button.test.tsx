import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "rounded-lg px-6 py-4 text-center font-bold transition-all duration-300 ease-in-out leading-tight tracking-[0.5px] border border-transparent bg-cta-fill-primary text-white hover:opacity-50 w-full"
    );
  });

  it("renders primary variant correctly", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button", { name: /primary/i });
    expect(button).toHaveClass(
      "rounded-lg px-6 py-4 text-center font-bold transition-all duration-300 ease-in-out leading-tight tracking-[0.5px] border border-transparent bg-cta-fill-primary text-white hover:opacity-50 w-full"
    );
  });

  it("renders secondary variant correctly", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: /secondary/i });
    expect(button).toHaveClass(
      "rounded-lg px-6 py-4 text-center font-bold transition-all duration-300 ease-in-out leading-tight tracking-[0.5px] border border-cta-stroke-primary text-cta-content-secondary hover:bg-cta-fill-primary hover:text-white w-full"
    );
  });

  it("applies base styles to all buttons", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toHaveClass(
      "rounded-lg px-6 py-4 text-center font-bold transition-all duration-300 ease-in-out leading-tight tracking-[0.5px]"
    );
  });

  it("applies additional className when provided", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });
    expect(button).toHaveClass("custom-class");
  });

  it("passes through additional props", () => {
    render(
      <Button disabled data-testid="test-button">
        Disabled
      </Button>
    );
    const button = screen.getByTestId("test-button");
    expect(button).toBeDisabled();
  });

  it("renders children correctly", () => {
    render(
      <Button>
        <span>Complex children</span>
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Complex children");
  });

  it("applies full width when fullWidth prop is true", () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole("button", { name: /full width/i });
    expect(button).toHaveClass("w-full");
  });

  it("does not apply full width when fullWidth prop is false", () => {
    render(<Button fullWidth={false}>Not Full Width</Button>);
    const button = screen.getByRole("button", { name: /not full width/i });
    expect(button).not.toHaveClass("w-full");
  });
});
