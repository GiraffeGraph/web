interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "teal" | "amber" | "warm" | "muted";
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[rgba(233,174,63,0.15)] border border-[rgba(233,174,63,0.3)] text-[#F0C468]",
  secondary:
    "bg-[rgba(167,173,179,0.1)] border border-[rgba(167,173,179,0.2)] text-[#A7ADB3]",
  teal: "bg-[rgba(82,196,164,0.12)] border border-[rgba(82,196,164,0.25)] text-[#52C4A4]",
  amber:
    "bg-[rgba(233,174,63,0.12)] border border-[rgba(233,174,63,0.25)] text-[#E9AE3F]",
  warm: "bg-[rgba(212,120,90,0.12)] border border-[rgba(212,120,90,0.25)] text-[#D4785A]",
  muted:
    "bg-[rgba(90,106,126,0.2)] border border-[rgba(90,106,126,0.3)] text-[#5A6A7E]",
};

export function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
