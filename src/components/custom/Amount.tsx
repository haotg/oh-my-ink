import { formatPrice } from "@/lib/utils";
import { JSX } from "react";
import { cn } from "@/lib/utils";

interface AmountProps {
  amount: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export default function Amount({
  amount,
  as: Component = "p",
  className,
}: AmountProps) {
  return (
    <Component className={cn("text-sm", className)}>
      {formatPrice(amount)}
    </Component>
  );
}
