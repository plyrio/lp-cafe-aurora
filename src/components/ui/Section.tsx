import { twMerge } from "tailwind-merge";

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id: string;
}

export const Section = ({children, className, id}: SectionProps) => {
  return (
      <section className={twMerge(`max-w-7xl items-center px-4 mx-auto md:flex md:px-8 md:pb-0`, className)} id={id}>
        {children}
    </section>
  )
}
