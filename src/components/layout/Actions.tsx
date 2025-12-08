import { Button } from "@/components/ui/button"


export const Actions = () => {
  return (
    <>
      <Button type="submit" variant="default" className=' rounded-l-none  h-full border-none text-white hover:bg-transparent bg-transparent rounded-3xl underline hover:text-orange-300'>
        Entrar
      </Button>
      <Button type="submit" variant="default" className='rounded-l-none  h-full border-none text-stone-900 bg-orange-300 rounded-3xl hover:bg-orange-200'>
        Registrar
      </Button>
    
    </>
  )
}
