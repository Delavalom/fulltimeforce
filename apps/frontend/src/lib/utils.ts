import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(timestamp: string) {
  const now = new Date();
  const date = new Date(timestamp);
  const timeDifference = now.getTime() - date.getTime(); 
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  
  if (hoursAgo < 24) {
    if (hoursAgo < 1) {
      const minutesAgo = Math.floor(timeDifference / (1000 * 60));
      return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
    }
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
  } else {
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  }
}