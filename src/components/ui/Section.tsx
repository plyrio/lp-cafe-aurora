import { twMerge } from "tailwind-merge";
import { motion } from 'motion/react'

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id: string;
    noColumns?: boolean;
    motionAll?: boolean;    
}


export const Section = ({children, className, id, noColumns = true, motionAll = true}: SectionProps) => {
  const innerBase = "mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-16 md:items-center md:gap-4 lg:px-8";
  const innerGridClass = noColumns ? "" : "md:grid md:grid-cols-2";

  
  const innerClass = twMerge(innerBase, innerGridClass);

  
  return (
      <section className={twMerge(`max-w-7xl items-center px-4 mx-auto md:flex md:px-8 md:pb-0`, className)} id={id}>
        {motionAll ? 
        (
          <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className= {innerClass}>
          {children}
        </motion.div> 
        ) : (
          <div className= {innerClass}>{children}</div>
        )} 
        
    </section>
  )
}
