import type React from 'react';
import { twMerge } from 'tailwind-merge';

interface props {
  children: React.ReactNode;
  className?: string;
}

export const Logo = ({ className, children }: props) => {
  return (
    <a href='/' className={twMerge(`flex font-brand text-4xl item-center hover:text-orange-300 transition-all transform delay-100 ease-linear`, className)}>{children}</a>
  )
}
