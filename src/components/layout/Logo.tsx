import { twMerge } from 'tailwind-merge';

interface props  {
    className?: string;
}

export const Logo = ({className} : props) => {
  return (
      <a href='/' className={twMerge(`flex font-brand text-4xl item-center `, className)}>Café Aurora</a>
  )
}
