import Image from "next/image"

export const TestimonialsSection = () => {
    return (
        <section className="py-32">
            <div className="container flex flex-col items-center justify-center gap-12">
                <h2 className="font-sans text-heading-xl text-gray-100 max-w-lg text-center">Quem utiliza, aprova!</h2>
                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-gray-600 border border-gray-400 rounded-xl p-10 flex flex-col gap-10">
                        <p className="text-body-md text-gray-200 italic">Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A</p>
                        <div className="flex items-center gap-3">
                            <Image 
                                src="/testimonial-avatar-annette.png"
                                width={38}
                                height={38}
                                alt="Avatar do testemunho de Annette."
                                className="border border-blue-200 rounded-full size-10"
                            />
                            <span className="flex flex-col gap-1">
                                <h4 className="text-gray-200 text-body-sm">Annete Bones</h4>
                                <span className="text-gray-300 text-body-xs">CEO na Anne Corp</span>
                            </span>
                        </div>
                    </div>
                    <div className="bg-gray-600 border border-gray-400 rounded-xl p-10 flex flex-col gap-10">
                        <p className="text-body-md text-gray-200 italic">Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!</p>
                        <div className="flex items-center gap-3">
                            <Image 
                                src="/testimonial-avatar-jacob.png"
                                width={38}
                                height={38}
                                alt="Avatar do testemunho de Jacob."
                                className="border border-blue-200 rounded-full size-10"
                            />
                            <span className="flex flex-col gap-1">
                                <h4 className="text-gray-200 text-body-sm">Jacob Jones</h4>
                                <span className="text-gray-300 text-body-xs">CEO na JJ Org</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}