import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Section } from "../ui/Section"

export const Hero = () => {
  return (
    <Section className="relative flex h-full w-dvw overflow-hidden bg-hero bg-cover bg-center" id="hero">
      
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent"></div>
      <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3.3, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }} className="relative z-10 w-full max-w-7xl item-start  pt-36 pb-28">
        <div className="flex flex-col font-medium items-start max-w-dvw lg:max-w-dvw space-y-4 text-white">

          <p className="font-aurorabold text-sm sm:text-base md:text-lg lg:text-xl  drop-shadow-md">
            Dê o melhor início ao seu dia com
          </p>


          <p className="font-brand leading-none text-9xl md:text-[200px]  drop-shadow-black drop-shadow-2xl">
            Café
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl drop-shadow-black drop-shadow-2xl">
            Nada melhor do que começar o dia com uma xícara de café.
            Descubra os melhores sabores que você já experimentou.
            Nós oferecemos sempre o melhor para nossos clientes.
          </p>

          <div>
            <Button type="submit" variant="default" className='rounded-l-none  h-full border-none text-stone-900 bg-orange-300 rounded-3xl hover:bg-orange-200'>
        Peça Agora
      </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
