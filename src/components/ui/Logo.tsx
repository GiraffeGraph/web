import Image from "next/image";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

export function Logo({
  size = 32,
  showText = true,
  className = "",
  textClassName = "",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="GiraffeGraph"
    >
      <Image
        src="/icon.png"
        alt="GiraffeGraph"
        width={size}
        height={size}
        priority
      />

      {showText && (
        <span
          className={`font-semibold gradient-text tracking-tight ${textClassName}`}
          style={{ fontSize: size * 0.5, lineHeight: 1 }}
        >
          GiraffeGraph
        </span>
      )}
    </span>
  );
}
