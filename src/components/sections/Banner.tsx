import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import CupCoffeBanner from '../../assets/images/cup.png'
import CoffeBean from '../../assets/images/coffee_bean.png'

export const Banner = () => {
    return (
        <Section id="about" className='relative overflow-hidden' noColumns={false}>
            <div className="absolute inset-0 bg-banner h-full w-full bg-cover bg-center"></div>
      
      <div className="relative max-w-prose text-left z-20">
          <h1 className="text-4xl font-aurorabold sm:text-5xl text-white">
            Tenha a chance de viver uma
manhã incrível
          </h1>

          <p className="mt-6 text-base text-pretty text-white sm:text-lg/relaxed max-w-4/5">
           Estamos oferecendo a você uma oportunidade única
de experimentar uma vida melhor com um bom café.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Button children="Peça Agora" href={'#'} className='' />
          </div>
        </div>
        <div className='relative z-20 flex items-end'>
          <img src={CupCoffeBanner} alt="imagem" className='z-50 mx-auto hidden text-gray-900 md:block object-contain h-full drop-shadow-2xl' />
          
        </div>
        <img src={CoffeBean} alt="grãos de café" className=' md:block absolute right-0 bottom-0 h-full w-auto pointer-events-none' />
    </Section>
    )
}
