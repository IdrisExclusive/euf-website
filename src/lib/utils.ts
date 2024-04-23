import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const getDecimalPlace = (num: number) => {
    let count = 0
    while (num > 1) {
        num = num / 1000
        count = count + 1
    }
    return count
}