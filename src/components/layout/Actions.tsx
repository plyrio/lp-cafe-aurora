import { Button } from "../ui/ButtonDefault"

export const Actions = () => {
  return (
    <>
      <Button children="Entrar" href={""} bgTransparent className="text-white p-0 flex items-center justify-center drop-shadow-sm drop-shadow-orange-300/50"/>
      <Button children="Registrar" href={""} className="text-white flex items-center justify-center gap-x-1 font-medium hover:bg-gray-700  md:inline-flex drop-shadow-sm drop-shadow-orange-300/50" />
    </>
  )
}
