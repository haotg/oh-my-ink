import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("zh-HK", {
    style: "currency",
    currency: "HKD",
  }).format(amount);
};
