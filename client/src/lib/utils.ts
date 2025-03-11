import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function typeWriter(text: string, setOutput: (text: string) => void, speed = 50) {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      setOutput(text.substring(0, i + 1));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
  return timer;
}
