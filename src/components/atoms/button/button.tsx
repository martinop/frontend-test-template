import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "w-full rounded-lg px-6 py-4 text-center font-bold transition-all duration-300 ease-in-out leading-tight tracking-[0.5px]";

  const variantStyles = {
    primary:
      "border border-transparent bg-neutral-700 text-white hover:bg-neutral-600",
    secondary:
      "border border-cta-stroke-primary text-cta-content-secondary hover:bg-cta-content-secondary hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
