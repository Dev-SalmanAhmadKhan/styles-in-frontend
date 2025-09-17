import React from "react";

export const Paragraph = ({
  children,
  size = "base",
  className,
  as: Component = "p",
}: {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg" | "xl" | "xxl";
  className?: string;
  as?: React.ElementType;
}) => {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-3xl",
  } as const;

  const classes = ["leading-relaxed", sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
};
