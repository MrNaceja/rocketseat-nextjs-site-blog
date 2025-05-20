import { ArrowRight, Clock, Store } from "lucide-react"
import Image from "next/image"
import { Button } from "../../../../components/ui/button"
import Link from "next/link"

export const HeroSection = () => {
    return (
        <section className="container flex flex-col md:flex-row justify-between py-20 min-h-[20rem] h-[36rem]">
            {/* Conteudo */}
            <div className="flex flex-col gap-14 flex-1 text-center md:text-left items-center md:items-start">
                <div className="flex flex-col gap-8 text-gray-200 max-w-2xl items-center md:items-start">
                    <h1 className="text-heading-hg text-gray-100 font-sans">Venda seus produtos como afiliado em um único lugar</h1>
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-3 items-center text-body-md">
                            <Clock className="text-cyan-100 size-5" />
                            Crie o seu site em menos de 5 minutos
                        </span>
                        <span className="flex gap-3 items-center text-body-md">
                            <Store className="text-cyan-100 size-5" />
                            Acompanhe e otimize seu negócio online
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 justify-stretch w-fit">
                    <Button asChild className="text-zinc-100 rounded-full">
                        <Link href="/criar-loja">
                            Criar loja grátis
                            <ArrowRight />
                        </Link>
                    </Button>

                    <p className="text-gray-300 text-body-xs">Não precisa de cartão de crédito</p>
                </div>
            </div>

            {/* Ilustração */}
            <Image
                src="/hero-bg.svg"
                width={200}
                height={200}
                alt="Ilustração Hero Section"
                className="object-contain h-full w-auto invisible md:visible"
            />
        </section>
    )
}