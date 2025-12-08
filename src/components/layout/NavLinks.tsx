
const links = [
  { label: "Home", href: "#" },
  { label: "Sobre", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Contato", href: "#newsletter" },
];

export const NavLinks = () => {

  return (
    <nav >
      <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        {links.map((item) => (
          <li className="list-none"><a className="text-sm text-white hover:text-orange-300 " href={item.href}>{item.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
