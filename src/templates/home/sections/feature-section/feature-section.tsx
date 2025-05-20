import Link from "next/link"
import { Button } from "../../../../components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const FeatureSection = () => {
    return (
        <section className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-500 rounded-xl p-6 md:py-14 md:px-12 flex flex-col gap-4 items-start">
                <span className="text-body-tag text-blue-200 bg-blue-400 uppercase px-3 py-2 rounded">Simples</span>
                <h3 className="text-gray-100 text-heading-sm md:text-heading-lg font-sans">Crie um catálogo de produtos online em poucos minutos</h3>
            </div>
            <div className="bg-gray-500 rounded-xl p-6 md:py-14 md:px-12 flex flex-col gap-4 items-start">
                <span className="text-body-tag text-blue-200 bg-blue-400 uppercase px-3 py-2 rounded">Prático</span>
                <h3 className="text-gray-100 text-heading-sm md:text-heading-lg font-sans">Venda para seu público através de uma plataforma única</h3>
            </div>
            <div className="bg-gray-500 rounded-xl p-6 md:py-14 md:px-12 grid grid-cols-1 md:grid-cols-2 col-span-full justify-between">
                <div className="flex flex-col justify-between">
                    <div className="gap-4 flex flex-col items-start">
                        <span className="text-body-tag text-blue-200 bg-blue-400 uppercase px-3 py-2 rounded">Prático</span>
                        <h3 className="text-gray-100 text-heading-sm md:text-heading-lg font-sans">Venda para seu público através de uma plataforma única</h3>
                    </div>

                    <Button asChild className="rounded-full w-fit hidden md:flex">
                        <Link href="/criar-loja">
                            Criar loja grátis
                            <ArrowRight />
                        </Link>
                    </Button>
                </div>
                <Image
                    src="/feature-bg.svg"
                    width={440}
                    height={330}
                    alt="Ilustração Feature Section"
                    className="object-contain w-full"
                />

                <Button asChild className="rounded-full w-full flex md:hidden">
                    <Link href="/criar-loja">
                        Criar loja grátis
                        <ArrowRight />
                    </Link>
                </Button>
            </div>
        </section>
    )
}