
const links = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const NavLinks = () => {

  return (
    <nav >
      <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        {links.map((item) => (
          <li className="list-none"><a className="text-sm text-white drop-shadow-sm drop-shadow-orange-300/50" href={item.href}>{item.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
