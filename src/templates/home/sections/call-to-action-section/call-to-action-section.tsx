import Link from "next/link"
import { Button } from "../../../../components/ui/button"
import { ArrowRight, Store } from "lucide-react"

export const CallToActionSection = () => {
    return (
        <section className="py-32 relative">

            <figure className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-[url('/call-to-action-bg.svg')] opacity-90" />
            
            <span className="bg-cyan-300 rounded-full size-16 grid place-items-center absolute -top-8 left-1/2 -translate-x-1/2">
                <Store className="size-8 text-cyan-100" />
            </span>

            <div className="relative flex flex-col items-center justify-center gap-10">

                <h2 className="text-heading-xl text-gray-100 max-w-xl text-center font-sans">Crie uma loja online e inicie suas vendas ainda hoje</h2>

                <Button asChild className="text-zinc-100 rounded-full">
                    <Link href="/criar-loja">
                        Criar loja grátis
                        <ArrowRight />
                    </Link>
                </Button>
            </div>
        </section>
    )
}