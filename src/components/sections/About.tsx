
import { Section } from '../ui/Section'
import CupCoffe from '../../assets/images/cup-coffe.png'
import { Button } from "@/components/ui/button"
import CoffeBlastLeft from '../../assets/images/coffee_blast_left.png'

export const About = () => {
  return (
    <Section id="about" className='relative ' noColumns={false}>
      <div className="max-w-prose text-left">
        <h1 className="text-4xl font-aurorabold sm:text-5xl text-yellow-900">
          Descubra o melhor café
        </h1>

        <p className="mt-4 text-base text-pretty text-neutral-500 sm:text-lg/relaxed">
          A Cafeteria Aurora é uma cafeteria que oferece café de alta qualidade para ajudar a aumentar sua produtividade e melhorar o seu humor. Tomar uma xícara de café é bom, mas tomar uma xícara de café de verdade é ainda melhor. Não há dúvida de que você vai aproveitar esse café mais do que qualquer outro que já tenha experimentado.
        </p>

        <div className="mt-4 flex gap-4 sm:mt-6">
          <Button type="submit" variant="default" className='rounded-l-none  h-full border-none text-stone-900 bg-orange-300 rounded-3xl hover:bg-orange-200'>
            Saiba Mais
          </Button>
        </div>
      </div>
      <div>
        <img src={CupCoffe} alt="imagem" className='mx-auto hidden max-w-full text-gray-900 md:block object-contain h-auto' />
      </div>


      <div className="absolute left-0 bottom-0 w-full pointer-events-none">
      </div>
      <img src={CoffeBlastLeft} alt="grãos de café" className=' md:block absolute left-0 -bottom-10 pointer-events-none w-2/3 md:max-w-1/4 h-auto' />
    </Section>

  )
}
