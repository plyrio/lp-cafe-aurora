import { Button } from '@/components/ui/button'
import { Section } from '../ui/Section'
import CupCoffeBanner from '../../assets/images/cup.png'
import CoffeBean from '../../assets/images/coffee_bean.png'
import { fadeRight, fadeUp } from '@/animations/variants'
import { motion } from 'motion/react'

export const Banner = () => {
  return (
    <Section id="banner" className='relative overflow-hidden' noColumns={false}>
      <div className="absolute inset-0 bg-banner h-full w-full bg-cover bg-center"></div>

      <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible" className="relative max-w-prose text-left z-20">
        <h1 className="text-4xl font-aurorabold sm:text-5xl text-white">
          Tenha a chance de viver uma
          manhã incrível
        </h1>

        <p className="mt-6 text-base text-pretty text-white sm:text-lg/relaxed max-w-4/5">
          Estamos oferecendo a você uma oportunidade única
          de experimentar uma vida melhor com um bom café.
        </p>

        <div className="flex">
          <Button type="submit" variant="default" className='mt-8 rounded-l-none  h-full border-none text-stone-900 bg-orange-300 rounded-3xl hover:bg-orange-200'>
            Peça Agora
          </Button>
        </div>
      </motion.div>
      <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
       className='relative z-20 flex items-end'>
        <img src={CupCoffeBanner} alt="imagem" className='z-50 mx-auto hidden text-gray-900 md:block object-contain h-full drop-shadow-2xl' />

      </motion.div>
      <img src={CoffeBean} alt="grãos de café" className=' md:block absolute right-0 bottom-0 h-full w-auto pointer-events-none' />
    </Section>
  )
}
