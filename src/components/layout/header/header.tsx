import { Button } from "@/components/ui/button"
import { ActiveLink } from "../../active-link/active-link"
import Link from "next/link"
import { Logo } from "../../logo"

export const Header = () => {
    return (
        <header className="fixed z-10 top-0 border-b border-white/10 text-zinc-400 w-full backdrop-blur-md">
            <div className="container flex item-center justify-between py-7">
                <Logo />
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <ActiveLink href="/">Inicio</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/blog">Blog</ActiveLink>
                        </li>
                        <li>
                            <Button variant="secondary" asChild>
                                <Link href="/comecar">Começar</Link>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}