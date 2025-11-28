import { Section } from "../ui/Section"

export const Hero = () => {
  return (
    <Section className="flex relative bg-hero bg-cover bg-center h-screen min-w-full items-center justify-center" id="hero">
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent"></div>


      <div className="relative z-10 flex flex-col items-start text-white px-4 md:px-8 max-w-3xl">
        <p className="font-medium text-lg md:text-xl lg:text-2xl">
          We've got your morning covered with
        </p>

        <p className="font-brand text-[220px] ">
          Coffee
        </p>
      </div>
    </Section>
  )
}
