import { BlogDetails } from "@/templates/blog/blog-details";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const revalidate = 60; // Quanto tempo para invalidar o cache e "rebuildar" a rota dinamica

/**
 * True: tentar gerar a rota para o caminho dinamico (mesmo que nao retornado em generateStaticParams())
 * false: caso seja um caminho diferente do "buildado" por generateStaticParams() então redireciona para 404
 */
export const dynamicParams = true 

/**
 * Função que monta os paths estaticos que deverão ser gerados no momento de build...
 */
export const generateStaticParams = async () => allPosts.map(({ slug }) => ({ slug })) 

type Props = {
    params: Promise<{ slug: string }>
}
export default async function BlogDetailsPage({ params }: Props) {
    const { slug } = await params

    const post = allPosts.find(post => post.slug === slug)

    if ( !post ) notFound()

    return <BlogDetails post={post} />
}