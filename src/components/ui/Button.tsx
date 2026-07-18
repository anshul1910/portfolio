import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-[0_0_0_1px_rgba(99,102,241,0.2)] hover:shadow-[0_0_24px_-4px_rgba(99,102,241,0.6)]",
  secondary:
    "bg-transparent text-[rgb(var(--fg))] border border-[rgb(var(--border))] hover:border-accent-500/60 hover:bg-[rgb(var(--card))]",
  ghost:
    "bg-transparent text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg))]",
};

const sizeStyles = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
