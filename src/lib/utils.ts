import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { allProjects } from 'contentlayer/generated';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
