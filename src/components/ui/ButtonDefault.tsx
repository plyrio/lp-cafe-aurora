import { twMerge } from "tailwind-merge";

interface buttonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    bgTransparent?: boolean;
}
export const Button = ({ children, href, className, bgTransparent = false }: buttonProps) => {
    return (
        <a className={twMerge(bgTransparent ? `flex rounded-3xl p-2` : `flex bg-orange-300 rounded-3xl py-2 px-5 cursor-pointer`, className)} href={href}>
            {children}
        </a>
    )
}
