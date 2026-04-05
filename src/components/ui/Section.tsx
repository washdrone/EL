interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "light" | "dark" | "navy";
  padding?: "default" | "large" | "none";
  id?: string;
}

const bgMap = {
  white: "bg-white",
  light: "bg-surface-50",
  dark: "gradient-dark-section",
  navy: "bg-navy-900",
};

const paddingMap = {
  default: "section-padding",
  large: "section-padding-lg",
  none: "",
};

export default function Section({
  children,
  className = "",
  bg = "white",
  padding = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgMap[bg]} ${paddingMap[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
