import { Avatar } from "@/components/avatar"

export const TestimonialsSection = () => {
    return (
        <section className="py-32">
            <div className="container flex flex-col items-center justify-center gap-12">
                <h2 className="font-sans text-heading-xl text-gray-100 max-w-lg text-center">Quem utiliza, aprova!</h2>
                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-gray-600 border border-gray-400 rounded-xl p-10 flex flex-col gap-10">
                        <p className="text-body-md text-gray-200 italic flex-1">Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.</p>
                        <Avatar.Root>
                            <Avatar.Image
                                src="/testimonial-avatar-annette.png"
                                size="sm"
                                alt="Avatar do testemunho de Annette."
                            />

                            <Avatar.Info>
                                <Avatar.Title>Annete Bones</Avatar.Title>
                                <Avatar.Description>CEO na Anne Corp</Avatar.Description>
                            </Avatar.Info>
                        </Avatar.Root>
                    </div>
                    <div className="bg-gray-600 border border-gray-400 rounded-xl p-10 flex flex-col gap-10">
                        <p className="text-body-md text-gray-200 italic flex-1">Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!</p>
                        <Avatar.Root>
                            <Avatar.Image
                                src="/testimonial-avatar-jacob.png"
                                size="sm"
                                alt="Avatar do testemunho de Jacob."
                            />

                            <Avatar.Info>
                                <Avatar.Title>Jacob Jones</Avatar.Title>
                                <Avatar.Description>CEO na JJ Org</Avatar.Description>
                            </Avatar.Info>
                        </Avatar.Root>
                    </div>

                </div>
            </div>
        </section>
    )
}