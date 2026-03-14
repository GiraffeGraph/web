interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        rounded-[16px] border border-[#1A2F44] 
        bg-gradient-to-br from-[#1D2E47] to-[#202F4A]
        p-6 md:p-8
        ${hover ? "bento-card cursor-default" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
