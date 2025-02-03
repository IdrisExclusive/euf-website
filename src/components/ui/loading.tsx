import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const loadingVariants = cva("animate-pulse bg-muted/60", {
  variants: {
    variant: {
      default: "w-full h-8 rounded-md",
      titleText: "w-40 md:w-48 xl:w-60 h-6 rounded-lg",
      bodyText: "w-32 md:w-64 xl:w-80 h-4 rounded-lg",
      longText: "w-full h-4 rounded-lg",
      shortText: "w-24 md:w-36 xl:w-48 h-4 rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface LoadingUiProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {}

export const LoadingUi = ({ variant, className, ...props }: LoadingUiProps) => {
  return (
    <div className={cn(loadingVariants({ variant, className }))} {...props} />
  );
};
