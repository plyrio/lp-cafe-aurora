
import { Section } from '../ui/Section'
import CupCoffe from '../../assets/images/cup-coffe.png'
import { Button } from '../ui/Button'
import CoffeBlastLeft from '../../assets/images/coffee_blast_left.png'

export const About = () => {
  return (
    <Section id="about" className='relative ' noColumns={false}>
      <div className="max-w-prose text-left">
          <h1 className="text-4xl font-aurorabold sm:text-5xl text-stone-900">
            Descubra o melhor café
          </h1>

          <p className="mt-4 text-base text-pretty text-neutral-500 sm:text-lg/relaxed">
           A Cafeteria Aurora é uma cafeteria que oferece café de alta qualidade para ajudar a aumentar sua produtividade e melhorar o seu humor. Tomar uma xícara de café é bom, mas tomar uma xícara de café de verdade é ainda melhor. Não há dúvida de que você vai aproveitar esse café mais do que qualquer outro que já tenha experimentado.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Button children="Saiba Mais" href={'#'} className='' />
          </div>
        </div>
        <div>
          <img src={CupCoffe} alt="imagem" className='mx-auto hidden max-w-full text-gray-900 md:block object-contain h-auto' />
        </div>

        
      <div className="absolute left-0 bottom-0 w-full pointer-events-none">
        <img src={CoffeBlastLeft} alt="cfb" className='max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[420px] 2xl:max-w-[480px] translate-y-1/3 lg:translate-y-1/4 xl:translate-y-0'/>
      </div>
    </Section>
    
  )
}
