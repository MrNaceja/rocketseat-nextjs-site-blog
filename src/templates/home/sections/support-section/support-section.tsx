import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react"

export const SupportSection = () => {
    return (
        <section className="py-32 relative">

            <figure className="hidden md:block absolute inset-0 bg-no-repeat bg-cover bg-center bg-[url('/support-bg.svg')] opacity-90" />

            <div className="relative container flex flex-col items-center justify-center gap-12">
                <h2 className="font-sans text-heading-xl text-gray-100 max-w-lg text-center">Sua loja de afiliados, simples, do jeito que deveria ser</h2>
                <div className="grid md:grid-cols-3 gap-6">

                    <div className="p-6 rounded-xl flex flex-col item-start bg-blue-400 gap-4">
                        <span className="grid place-items-center rounded-sm bg-blue-300 size-9">
                            <PaintbrushVertical className="size-5 text-white" />
                        </span>
                        <span className="flex flex-col items-start gap-2">
                            <strong className="font-sans text-heading-sm text-gray-100">Personalize seu site</strong>
                            <p className="text-body-sm text-gray-200">Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.</p>
                        </span>
                    </div>
                    <div className="p-6 rounded-xl flex flex-col item-start bg-cyan-300 gap-4">
                        <span className="grid place-items-center rounded-sm bg-cyan-200 size-9">
                            <Store className="size-5 text-white" />
                        </span>
                        <span className="flex flex-col items-start gap-2">
                            <strong className="font-sans text-heading-sm text-gray-100">Venda de qualquer loja</strong>
                            <p className="text-body-sm text-gray-200">Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.</p>
                        </span>
                    </div>
                    <div className="p-6 rounded-xl flex flex-col item-start bg-blue-400 gap-4">
                        <span className="grid place-items-center rounded-sm bg-blue-300 size-9">
                            <HeartHandshake className="size-5 text-white" />
                        </span>
                        <span className="flex flex-col items-start gap-2">
                            <strong className="font-sans text-heading-sm text-gray-100">Receba suporte amigável</strong>
                            <p className="text-body-sm text-gray-200">Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.</p>
                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
}