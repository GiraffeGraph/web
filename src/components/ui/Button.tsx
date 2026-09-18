"use client";

import { motion } from "framer-motion";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9AE3F] disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles = {
  primary:
    "bg-gradient-to-br from-[#E9AE3F] to-[#C4893A] text-[#1D2E47] shadow-[0_0_24px_rgba(233,174,63,0.35)] hover:shadow-[0_0_40px_rgba(233,174,63,0.5)] hover:scale-[1.02]",
  secondary:
    "bg-transparent border border-[#253D5A] text-[#A7ADB3] hover:text-white hover:border-[#E9AE3F] hover:bg-[#1A2F44]",
  ghost:
    "bg-transparent border border-[#253D5A] text-[#A7ADB3] hover:text-white hover:border-[#324155] hover:bg-[#243650]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-[15px] rounded-[10px]",
  lg: "px-8 py-4 text-base rounded-[10px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: variant === "primary" ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function ButtonLink({ variant = "primary", size = "md", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <motion.a
      whileHover={{ scale: variant === "primary" ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...(props as React.ComponentProps<typeof motion.a>)}
    >
      {children}
    </motion.a>
  );
}
