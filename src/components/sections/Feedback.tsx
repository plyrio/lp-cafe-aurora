import { Section } from '../ui/Section'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { feedbacks } from '@/constants/feedback'
import Aspas from "@/assets/images/aspas.png"
import coffeBlast from "@/assets/images/coffee_blast.png"
import coffeBlastUpper from "@/assets/images/coffee_blast_upper_left.png"

export const Feedback = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 20000, stopOnInteraction: true })
    )
    return (
        <Section id='feedback'>
            <div className="text-center relative h-full">
                <h1 className="text-4xl font-aurorabold sm:text-5xl text-yellow-900">
                    Nossa perfeição em café feedback
                </h1>

                <p className="mt-4 text-base text-pretty text-neutral-500 sm:text-lg/relaxed">
                    Nossos cliente têm coisas incríveis para dizer sobre nós
                </p>
                <div>
                    <Carousel
                    plugins={[plugin.current]}
                    className="h-full w-11/12 mx-auto mt-8 relative overflow-visible"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}

                >
                    <CarouselContent>
                        {feedbacks.map((item) => (
                            <CarouselItem key={item.id} className='flex mx-auto items-center justify-center'>
                                <div className="p-1 pb-20 e">
                                    <Card className='bg-orange-50 hover:bg-orange-100 border border-orange-100 flex md:p-8 flex-col shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400'>
                                        <img src={Aspas} alt="" className='max-h-10 ms-5 w-auto object-contain object-left ' />
                                        <CardContent className=" flex flex-col aspect-auto items-center justify-center px-12">
                                            <span className="text-base text-pretty text-neutral-500 sm:text-lg/relaxed">{item.text}</span>
                                            <div className='flex w-fit mx-auto relative -bottom-20  flex-col items-center text-center gap-3'>
                                                <div className='flex flex-col '>
                                                    <h3 className='md:text-4xl text-2xl text-yellow-900 font-aurorabold'>{item.name}</h3>
                                                    <h5 className='md:text-2xl text-sm text-pretty text-neutral-500 sm:text-xl/relaxed'>{item.role}</h5>
                                                </div>

                                                <img src={item.image} alt="" className='' />
                                            </div>


                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious className="rounded-lg h-16 w-auto aspect-square absolute opacity-100 bg-orange-300 text-yellow-900 translate-x-3" />
                    <CarouselNext className="rounded-lg h-16 w-auto aspect-square absolute opacity-100 bg-orange-300 text-yellow-900 -translate-x-3 " />

                </Carousel>
                </div>
                
            </div>
            <img src={coffeBlastUpper} alt="grãos de café" className=' md:block absolute pointer-events-none left-0 bottom-0 w-1/2 sm:w-2/3 md:max-w-1/4 h-auto' />
            <img src={coffeBlast} alt="grãos de café" className=' md:block absolute pointer-events-none right-0 top-55 md:top-50 lg:top-30 xl:top-20 w-1/2 sm:w-2/3 md:max-w-1/4 h-auto' />
        </Section>
    )
}
