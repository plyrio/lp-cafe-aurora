import { coffeeAdvantages } from '../../constants/coffeAdvantages'
import { Button } from "@/components/ui/button"
import { Section } from '../ui/Section'
import coffeBlast from "@/assets/images/coffee_blast.png"

export const Different = () => {
    return (
        <Section id='different' className='relative overflow-visible z-20'>
            <div className="text-center">
                <h1 className="text-4xl font-aurorabold sm:text-5xl text-yellow-900 z-30 relative">
                    Por que somos diferentes?
                </h1>

                <p className="mt-4 text-base text-pretty text-neutral-500 sm:text-lg/relaxed">
                    Nós não apenas fazemos o seu café, nós fazemos o seu dia!
                </p>
                <ul className="mt-8 grid lg:gap-4 gap-10 sm:grid-cols-2 lg:grid-cols-4 items-stretch  lg:space-y-0">
                    {coffeeAdvantages.map((advantage) => (
                        <li className='bg-orange-50 hover:bg-orange-100 border border-orange-100 flex flex-col shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400' key={advantage.id}>

                            <div className='flex flex-col mx-auto px-6 py-10'>
                                <img src={advantage.image} alt="" className="object-center h-auto w-22 mx-auto" />


                                <div className="relative pt-3">
                                    <h3 className="text-2xl font-aurorabold text-yellow-900 drop-shadow-orange-300/40 drop-shadow">
                                        {advantage.title}
                                    </h3>

                                    <p className="mt-2 flex flex-col">
                                        <span className="text-base text-stone-900 drop-shadow-orange-300/40 drop-shadow"> {advantage.description} </span>

                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>


                <p className="mt-4 text-base text-pretty text-neutral-500 sm:text-lg/relaxed">
                    Grandes ideias começam com um ótimo café deixe-nos ajudar você a alcançar isso
                </p>
                <h3 className="text-3xl font-aurorabold sm:text-3xl text-yellow-900">
                    Comece hoje mesmo.
                </h3>
                <Button type="submit" variant="default" className='mt-8 rounded-l-none  h-full border-none text-stone-900 bg-orange-300 rounded-3xl hover:bg-orange-200'>
                    Junte-se a nós
                </Button>
                
            </div>
            <img src={coffeBlast} alt="grãos de café" className=' md:block absolute pointer-events-none right-0 -top-15 md:-top-25 w-1/2 sm:w-2/3 md:max-w-1/4 h-auto' />
        </Section>
    )
}
