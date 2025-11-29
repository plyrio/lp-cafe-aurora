import { Button } from "../ui/Button"
import { Section } from "../ui/Section"

export const Hero = () => {
  return (
    <Section className="relative flex h-full md:h-screen w-full overflow-hidden min-w-full" id="hero">
      <div className="absolute inset-0 bg-hero bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 item-center pt-26  pb-14">
        <div className="flex flex-col font-medium items-start max-w-3xl space-y-4 text-white ">

          <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Nós garantimos o melhor começo para a sua manhã com
          </p>
          <p className="font-brand leading-none text-[clamp(3rem,12vw,14rem)]">
            Café
          </p>
          <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl max-w-xl">
            Nada melhor do que começar o dia com uma xícara de café.
            Descubra os melhores sabores que você já experimentou.
            Nós oferecemos sempre o melhor para nossos clientes.
          </p>
          <Button href={"#"}>Peça Agora</Button>
        </div>
      </div>

    </Section>
  )
}
