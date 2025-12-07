import { twMerge } from "tailwind-merge";


type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
  noColumns?: boolean;

}


export const Section = ({ children, className, id, noColumns = true }: SectionProps) => {
  const innerBase = "mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-16 md:items-center md:gap-4 lg:px-8";
  const innerGridClass = noColumns ? "" : "md:grid md:grid-cols-2";


  return (
    <section className={twMerge(`items-center px-4 mx-auto md:flex md:px-8 md:pb-0`, className)} id={id}>
      <div className={twMerge(innerBase, innerGridClass)}>{children}</div>
    </section>
  )
}
