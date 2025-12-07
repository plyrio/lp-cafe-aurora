import Jonny from "@/assets/images/jonny.png"

export interface FeedbackItem {
  id: number
  text: string
  name: string
  role: string
  image: string
}

export const feedbacks: FeedbackItem[] = [
  {
    id: 1,
    text:
      "O café da Aurora me surpreendeu desde o primeiro gole. Aroma intenso, sabor marcante e um atendimento impecável. É o tipo de experiência que a gente quer repetir todos os dias.",
    name: "Jonny Thomas",
    role: "Project Manager",
    image: Jonny,
  },
  {
    id: 2,
    text:
      "Ambiente aconchegante, baristas atenciosos e um cardápio que realmente mostra paixão por café. Sem dúvida, um dos melhores lugares para relaxar e trabalhar ao mesmo tempo.",
    name: "Marina Costa",
    role: "UI/UX Designer",
    image: Jonny,
  },
  {
    id: 3,
    text:
      "Sou apaixonado por cafés especiais, e a cada visita encontro algo novo para apreciar. A qualidade é sempre consistente e o atendimento faz toda a diferença.",
    name: "Lucas Andrade",
    role: "Full-Stack Developer",
    image: Jonny,
  },
]
