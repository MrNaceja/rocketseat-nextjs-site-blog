import Link from "next/link"
import { Logo } from "../../logo"

export const Footer = () => {
    return (
        <footer className="bg-gray-500 w-full">
            <div className="flex items-center justify-between py-8 container mx-auto">
                <Logo />
                <nav>
                    <ul className="flex items-center gap-3">
                        <li><Link href="/termos-de-uso" className="text-blue-100 hover:text-blue-200">Termo de Uso</Link></li>
                        <li><Link href="/politicas-privacidade" className="text-blue-100 hover:text-blue-200">Politíca de Privacidade</Link></li>
                        <li><Link href="/enviar-feedback" className="text-blue-100 hover:text-blue-200">Enviar Feedback</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}