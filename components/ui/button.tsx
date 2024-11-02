import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap leading-[normal] font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-white",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        transparent: "bg-transparent",
      },
      size: {
        default: "py-[15px] px-[25px] rounded-[35px]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      active: {
        true: "!bg-primary dark:!text-text text-white",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      active: false, // Установите по умолчанию неактивное состояние
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Позволяет использовать кнопку как дочерний элемент
  active: boolean; // Новый пропс для состояния активности
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant, size, active, children, asChild, ...props }, ref) => {
  const Component = asChild ? "a" : "button"; // Если asChild, используем a вместо button

  return (
    <Component
      className={cn(
        buttonVariants({
          variant,
          size,
          active: active ? true : false,
          className,
        })
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
