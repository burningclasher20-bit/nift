import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full border border-transparent px-5 py-2.5 text-sm font-semibold transition-all duration-300';
  const variantClass =
    variant === 'primary'
      ? 'bg-terracotta text-white hover:bg-[#9e4e3a]'
      : variant === 'secondary'
      ? 'bg-white text-ink ring-1 ring-slate-300 hover:bg-slate-50'
      : 'bg-transparent text-ink hover:text-terracotta';

  return <button className={`${base} ${variantClass} ${className}`} {...props} />;
}
