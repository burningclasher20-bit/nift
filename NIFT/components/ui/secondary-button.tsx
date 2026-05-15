import { type ButtonHTMLAttributes } from 'react';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SecondaryButton({ className = '', ...props }: SecondaryButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:bg-slate-50 hover:shadow-md ${className}`}
      {...props}
    />
  );
}
