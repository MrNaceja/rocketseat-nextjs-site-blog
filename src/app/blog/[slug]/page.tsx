import { BlogDetails } from "@/templates/blog/blog-details";
import { allPosts, Post } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * Quanto tempo para invalidar o cache e "rebuildar" a rota dinamica
 */
export const revalidate = 60;

/**
 * True: tentar gerar a rota para o caminho dinamico (mesmo que nao retornado em generateStaticParams())
 * false: caso seja um caminho diferente do "buildado" por generateStaticParams() então redireciona para 404
 */
export const dynamicParams = true 

/**
 * Função que monta os paths estaticos que deverão ser gerados no momento de build...
 */
export const generateStaticParams = async () => allPosts.map(({ slug }) => ({ slug })) 

/**
 * Gera dinamicamente os metadados para a página dinamica...
 */
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const post = await extractPostFromSlugParams(params)

    if ( !post ) return {}

    return {
        title: post.title,
        description: post.description,
        authors: [ { name: post.author.name } ],
        openGraph: {
            images: [ post.banner ]
        }
    }
}

type Props = {
    params: Promise<{ slug: string }>
}
export default async function BlogDetailsPage({ params }: Props) {
    const post = await extractPostFromSlugParams(params)

    if ( !post ) notFound()

    return <BlogDetails post={post} />
}

async function extractPostFromSlugParams(params: Props['params']): Promise<Post | undefined> {
    const { slug } = await params
    return allPosts.find(post => post.slug === slug)
}