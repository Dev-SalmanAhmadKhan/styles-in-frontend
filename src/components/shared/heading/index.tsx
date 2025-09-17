import React from "react";

export const Heading = ({
  children,
  size = "2xl",
  className,
  as: Component = "h1",
}: {
  children: React.ReactNode;
  size?: "lg" | "xl" | "2xl" | "3xl" | "4xl";
  className?: string;
  as?: React.ElementType;
}) => {
  const sizeClasses = {
    lg: "text-2xl",
    xl: "text-4xl",
    md: "text-3xl",
    "2xl": "text-5xl",
    "3xl": "text-6xl",
    "4xl": "text-7xl",
  } as const;

  const classes = ["font-bold leading-tight", sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
};
