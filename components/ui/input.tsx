import React from "react";
import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";
const inputVariants = cva("input", {
  variants: {
    variant: {
      default:
        "w-full py-[10px] px-[15px] bg-transparent text-[#8B8787] border rounded-[10px] ",
      error:
        "border-red-500 focus:border-red-500 focus:ring-3 focus:ring-red-500",
      success:
        "border-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean; // Позволяет использовать кнопку как дочерний элемент
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
