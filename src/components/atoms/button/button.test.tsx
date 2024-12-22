import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-neutral-700 text-white hover:bg-neutral-600"
    );
  });

  it("renders primary variant correctly", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button", { name: /primary/i });
    expect(button).toHaveClass(
      "border border-transparent bg-neutral-700 text-white hover:bg-neutral-600"
    );
  });

  it("renders secondary variant correctly", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: /secondary/i });
    expect(button).toHaveClass(
      "border border-cta-stroke-primary text-cta-content-secondary hover:bg-cta-content-secondary hover:text-white"
    );
  });

  it("applies base styles to all buttons", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toHaveClass(
      "w-full rounded-lg px-6 py-4 text-center font-bold transition-all duration-300 ease-in-out leading-tight tracking-[0.5px]"
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
});
