import { Section } from '../ui/Section'
import { coffeeProducts } from '../../constants/productsList'
import { formatCurrencyBRL } from '../../utils/formatCurrency'
import { Button } from '../ui/Button'


export const Menu = () => {

    return (
        <Section id='menu'>
                <div className="text-center">
                    <h1 className="text-4xl font-aurorabold sm:text-5xl text-stone-900">
                        Aproveite um novo estilo de café
                    </h1>

                    <p className="mt-4 text-base text-pretty text-neutral-500 sm:text-lg/relaxed">
                        Explore todos os sabores de café conosco. Sempre há uma nova xícara que vale a pena experimentar.
                    </p>

                    <ul className="mt-8 grid lg:gap-4 gap-10 sm:grid-cols-2 lg:grid-cols-4 items-stretch  lg:space-y-0">
                        {coffeeProducts.map((product) => (
                            <li className='bg-orange-300/20 border border-orange-300/42 flex flex-col h-full shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400' key={product.id}>
                                <img src={product.image} alt="" className="h-auto w-full object-cover" />
                                

                                    <div className="relative pt-3">
                                        <h3 className="text-2xl font-aurorabold text-yellow-900 drop-shadow-orange-300/40 drop-shadow">
                                            {product.name}
                                        </h3>

                                    <p className="mt-2 flex flex-col">
                                        <span className="text-base text-stone-900 drop-shadow-orange-300/40 drop-shadow"> {product.description} </span>

                                        <span className="text-lg tracking-wider font-aurorabold text-stone-900 drop-shadow-orange-300/40 drop-shadow"> {formatCurrencyBRL(product.price)} </span>
                                        </p>
                                    </div>
                                
                                <Button children="Peça Agora" href={''} className='flex w-fit mx-auto relative -bottom-5' />
                            </li>
                        ))}
                    </ul>
                </div>
        </Section>
    )
}
