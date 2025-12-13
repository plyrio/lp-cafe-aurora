import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Section } from "../ui/Section"
import { heroContainer, heroItemLeft, heroItemUp } from "@/animations/variants"

export const Hero = () => {
  return (
    <Section className="relative flex h-full w-dvw overflow-hidden bg-hero bg-cover bg-center" id="hero">

      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent"></div>
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible" className="relative z-10 w-full max-w-7xl item-start  pt-36 pb-28">
        <div className="flex flex-col font-medium items-start max-w-dvw lg:max-w-dvw space-y-4 text-white">

          <motion.p 
          variants={heroItemUp}  
          className="font-aurorabold text-sm sm:text-base md:text-lg lg:text-xl  drop-shadow-md">
            Dê o melhor início ao seu dia com
          </motion.p>


          <motion.p 
          variants={heroItemLeft}
          className="font-brand leading-none text-9xl md:text-[200px]  drop-shadow-black drop-shadow-2xl">
            Café
          </motion.p>

          <motion.p 
          variants={heroItemUp}
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl drop-shadow-black drop-shadow-2xl">
            Nada melhor do que começar o dia com uma xícara de café.
            Descubra os melhores sabores que você já experimentou.
            Nós oferecemos sempre o melhor para nossos clientes.
          </motion.p>

          <motion.div variants={heroItemUp}>
            <Button type="submit" variant="default" className='rounded-l-none  h-full border-none text-stone-900 bg-orange-300 rounded-3xl hover:bg-orange-200'>
              Peça Agora
            </Button>
          </motion.div>
            
          
        </div>
      </motion.div>
    </Section>
  )
}
