import { Logo } from "./Logo";
import { footerMenus } from "../../constants/footerMenus";
import { socialMedia } from "../../constants/socialMedias";

export const Footer = () => {
    const year: number = new Date().getFullYear();
    return (
        <footer className="bg-footer bg-center bg-cover  bg-no-repeat ">
            <div className="mx-auto max-w-7xl space-y-8 px-4 md:pt-48 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="text-white">
                            <Logo children="Café Aurora"  />
                        </div>

                        <p className="mt-4 max-w-xs text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                            molestias.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            {socialMedia.map((item) => (
                                <li>
                                    <a key={item.name} href={item.href} rel="noreferrer" target="_blank" className="text-white transition hover:opacity-75">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon />
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        {footerMenus.map((menu) => (
                            <div key={menu.title}>
                                <p className="font-aurorabold text-white">{menu.title}</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    {menu.items.map((item) => (
                                        <li key={item.label}>
                                            <a href={item.href || "#"} className="text-white transition hover:opacity-75"> {item.label} </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        ))}

                    </div>
                </div>

                <p className="text-xs text-white">© {year}. Café Aurora. Todos direitos reservados.</p>
            </div>
        </footer>
    )
}
