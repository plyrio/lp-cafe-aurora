import { Section } from '../ui/Section'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import pngwing1 from "@/assets/images/pngwing_left.png"
import pngwing2 from "@/assets/images/pngwing 2.png"


export const Newsletter = () => {
    return (
        <Section id="newsletter" >
            <div className="absolute inset-0 bg-banner h-full w-full bg-cover bg-center"></div>

            <div className="relative text-center md:mb-10 md:mt-5 z-20">
                <h1 className="text-2xl md:text-4xl font-aurorabold  text-white">
                    Inscreva-se para receber as últimas novidades
                </h1>

                <p className="mt-6 text-base text-pretty text-white sm:text-lg/relaxed  text-center">
                    Não perca nossas notícias, atualizações, dicas e ofertas especiais
                </p>

                <div className="flex w-full max-w-lg items-center mt-7 mx-auto ">
                    <Input type="email" placeholder="Digite seu e-mail" className='bg-orange-50 rounded-sm rounded-r-none border-none ' />
                    <Button type="submit" variant="outline" className='bg-orange-300 rounded-sm rounded-l-none border-none'>
                        Inscrever-se
                    </Button>
                </div>
            </div>

            <div className='flex'>
                {/* Esquerda */}
                <img src={pngwing1} alt="grãos de café" className='hidden md:block absolute pointer-events-none left-0 -bottom-2/6  w-1/2 sm:w-2/3 md:max-w-1/4 h-auto' />
                {/* Direita */}
                <img src={pngwing2} alt="grãos de café" className='hidden md:block absolute right-0 -bottom-2/6 w-1/2 sm:w-2/3 md:max-w-1/4 h-auto pointer-events-none overflow-visible' />
            </div>
        </Section>
    )
}
