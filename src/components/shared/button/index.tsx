import { Button } from "antd";
import type { ButtonProps } from "antd";

export const PrimaryButton = ({
  children,
  btnSize = "lg",
  colorVariant = "primary",
  className,
  ...props
}: {
  children: React.ReactNode;
  btnSize?: "sm" | "md" | "lg";
  colorVariant?: "primary" | "secondary";
  className?: string;
} & Omit<ButtonProps, "type" | "className">) => {
  const sizeClasses = {
    sm: "h-8 px-4 text-sm",
    md: "h-10 px-6 text-base",
    lg: "h-12 px-8 text-lg",
  } as const;

  const variantClasses = {
    primary:
      "bg-primary hover:!bg-white hover:!text-primary hover:!border-primary",
    secondary:
      "!bg-white  hover:!bg-primary !text-primary  hover:!text-white !border-primary hover:!border-white",
  } as const;

  return (
    <Button
      type="primary"
      className={`
        border-none 
        transition-colors
        hover:!shadow-none  
        ${sizeClasses[btnSize]} 
        ${variantClasses[colorVariant]}
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </Button>
  );
};
