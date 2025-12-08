import { Section } from '../ui/Section'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import pngwing1 from "@/assets/images/pngwing_left.png"
import pngwing2 from "@/assets/images/pngwing 2.png"


export const Newsletter = () => {
    return (
        <Section id="newsletter" >
            <div className="absolute inset-0 bg-banner h-full w-full bg-cover bg-center"></div>

            <div className="relative  text-center mb-10 mt-5">
                <h1 className="text-4xl font-aurorabold sm:text-5xl text-white">
                    Inscreva-se para receber as últimas novidades
                </h1>

                <p className="mt-6 text-base text-pretty text-white sm:text-lg/relaxed  text-center">
                    Não perca nossas notícias, atualizações, dicas e ofertas especiais
                </p>

                <div className="flex w-full max-w-lg items-center mt-8 mx-auto h-12 ">
                    <Input type="email" placeholder="Digite seu e-mail" className='bg-orange-50 rounded-sm rounded-r-none border-none h-full' />
                    <Button type="submit" variant="outline" className='bg-orange-300 rounded-sm rounded-l-none  h-full border-none'>
                        Inscrever-se
                    </Button>
                </div>
            </div>

            <div className='flex'>
                {/* Esquerda */}
                <img src={pngwing1} alt="grãos de café" className=' md:block absolute left-0 -bottom-2/5 pointer-events-none w-auto h-10/12 lg:h-11/12' />
                {/* Direita */}
                <img src={pngwing2} alt="grãos de café" className=' md:block absolute right-0 -bottom-2/5 w-auto h-10/12 lg:h-11/12 pointer-events-none overflow-visible' />
            </div>
        </Section>
    )
}
