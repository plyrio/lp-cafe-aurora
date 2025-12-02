
const links = [
  { label: "Home", href: "#" },
  { label: "Sobre", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Contato", href: "#contact" },
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
