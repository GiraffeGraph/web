interface GradientTextProps {
  children: React.ReactNode;
  variant?: "brand" | "bronze" | "slate";
  className?: string;
}

export function GradientText({
  children,
  variant = "brand",
  className = "",
}: GradientTextProps) {
  const variantClass = {
    brand: "gradient-text",
    bronze: "gradient-text-bronze",
    slate: "gradient-text-slate",
  }[variant];

  return <span className={`${variantClass} ${className}`}>{children}</span>;
}
