import { type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-[32px] border border-white/60 bg-white/90 p-6 shadow-soft backdrop-blur-sm ${className}`}
      {...props}
    />
  );
}
