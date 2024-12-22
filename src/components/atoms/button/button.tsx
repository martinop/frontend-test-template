import { ButtonHTMLAttributes } from "react";
import cx from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const baseClasses =
  "rounded-lg px-6 py-4 text-center font-bold transition-all duration-300 ease-in-out leading-tight tracking-[0.5px]";

const variants = {
  primary:
    "border border-transparent bg-cta-fill-primary text-white hover:opacity-50",
  secondary:
    "border border-cta-stroke-primary text-cta-content-secondary hover:bg-cta-fill-primary hover:text-white",
};

export default function Button({
  variant = "primary",
  fullWidth = true,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        baseClasses,
        variants[variant],
        { "w-full": fullWidth },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
