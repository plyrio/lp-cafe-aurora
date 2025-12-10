import { useRef, useState } from "react";
import { Actions } from "./Actions";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useCloseOnResize } from "@/hooks/useCloseOnResize";
import { useScrollHeader } from "@/hooks/useScrollHeader";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => setOpenMenu(prev => !prev);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const scrolled = useScrollHeader();
  useScrollHeader();
  useClickOutside(menuRef, () => setOpenMenu(false));
  useCloseOnResize(() => setOpenMenu(false));


  return (
    <header className={`fixed  top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled ? "backdrop-blur-lg bg-black/20  shadow-lg" : "bg-transparent"}
      `}>
      <nav className={`${openMenu ? 'pb-4 px-4 backdrop-blur-xs bg-black shadow-lg' : 'pb-0'}  w-full items-center px-4 mx-auto md:flex md:px-8 md:pb-0`}>
        <div className="flex items-center justify-between py-3 md:py-3 md:block">
          <Logo className="text-white" children="Café Aurora" />
          <div className="md:hidden">
            <button className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              
              onClick={toggleMenu}
        aria-expanded={openMenu}
            >
              {
                openMenu ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={`flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ${openMenu ? 'block' : 'hidden'}`}>
          <NavLinks />
        </div>
        <div ref={menuRef} className={`${openMenu ? 'block' : 'hidden'} md:flex justify-center items-center space-y-8 my-8 md:my-0 md:space-x-6 md:space-y-0 mb-8 mx-auto flex flex-col md:flex-row`}>
          <Actions />
        </div>
      </nav>
    </header>
  )
}
