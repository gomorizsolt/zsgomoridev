import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeClasses = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes));
};
