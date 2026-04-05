interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
}

const widthMap = {
  default: "container-section",
  narrow: "container-narrow",
  wide: "container-wide",
};

export default function Container({
  children,
  className = "",
  width = "default",
}: ContainerProps) {
  return (
    <div className={`${widthMap[width]} ${className}`}>
      {children}
    </div>
  );
}
