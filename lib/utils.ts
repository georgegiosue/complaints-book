import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function xor(a: boolean, b: boolean): boolean {
  return (a || b) && !(a && b);
}

export function parseStringToBoolean(value: string): boolean {
  return value.trim().toLowerCase() === 'true';
}
