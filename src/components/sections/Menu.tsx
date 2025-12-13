import { Section } from '../ui/Section'
import { coffeeProducts } from '../../constants/productsList'
import { formatCurrencyBRL } from '../../utils/formatCurrency'
import { Button } from "@/components/ui/button"
import { motion } from 'motion/react'
import { container, item } from '@/animations/variants'


export const Menu = () => {

    return (
        <Section id='menu'>
            <div className="text-center">
                <h1 className="text-4xl font-aurorabold sm:text-5xl text-yellow-900">
                    Aproveite um novo estilo de café
                </h1>

                <p className="mt-4 text-base text-pretty text-neutral-500 sm:text-lg/relaxed">
                    Explore todos os sabores de café conosco. Sempre há uma nova xícara que vale a pena experimentar.
                </p>

                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8 grid lg:gap-4 gap-10 sm:grid-cols-2 lg:grid-cols-4 items-stretch  lg:space-y-0">
                    {coffeeProducts.map((product) => (
                        <motion.li className='bg-orange-50 hover:bg-orange-100 border border-orange-100 flex flex-col shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400' key={product.id} variants={item}>
                            <img src={product.image} alt="" className="h-auto w-full object-cover" />


                            <div className="relative pt-3">
                                <h3 className="text-2xl font-aurorabold text-yellow-900 drop-shadow-orange-200 drop-shadow">
                                    {product.name}
                                </h3>

                                <p className="mt-2 flex flex-col">
                                    <span className="text-base text-yellow-900 drop-shadow-orange-200 drop-shadow"> {product.description} </span>

                                    <span className="text-lg tracking-wider font-aurorabold text-yellow-900 drop-shadow-orange-200 drop-shadow"> {formatCurrencyBRL(product.price)} </span>
                                </p>
                            </div>
                            <Button type="submit" variant="default" className='flex w-fit mx-auto relative -bottom-5 h-auto rounded-l-none border-none text-stone-900 bg-orange-300 rounded-3xl hover:bg-orange-200'>
                                Peça Agora
                            </Button>

                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </Section>
    )
}
