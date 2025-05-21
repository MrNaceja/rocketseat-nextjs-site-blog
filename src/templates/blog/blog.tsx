import { Search } from "@/components/search"
import { useRouter } from "next/router"
import { BlogCard } from "./blog-card"
import { Inbox } from "lucide-react"
import { Props as BlogProps } from "@/pages/blog"

export const Blog = ({ posts }: BlogProps) => {
    const router = useRouter()
    const search = (router.query.search || '') as string

    const title = search ? `Resultados de busca para "${search}"` : 'Dicas e estratégias para impulsionar seu negócio'

    const post_cards = posts.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()));
    const hasPosts   = post_cards.length > 0

    return (
        <div className="flex flex-col container gap-14 pt-20 pb-32">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="flex flex-col gap-3">
                    <span className="text-body-tag text-cyan-100 uppercase rounded px-3 py-1 bg-cyan-300 w-fit">blog</span>
                    <h1 className="text-heading-lg text-gray-100 font-sans md:max-w-lg">{title}</h1>
                </div>
                <Search placeholder="Buscar" className="w-full md:w-auto" />
            </div>

            {hasPosts
                ? (
                    <main className="grid md:grid-cols-3 gap-6 flex-1">
                        {
                            post_cards.map(({ slug, title, description, banner, date, author, _id }) => (
                                <BlogCard
                                    key={_id}
                                    slug={slug}
                                    title={title}
                                    description={description}
                                    banner={banner}
                                    date={date}
                                    author={author}
                                />
                            ))
                        }
                    </main>
                )
                : (
                    <div className="p-5 h-96 flex flex-col items-center justify-center gap-4 text-gray-300 border border-dashed border-gray-400 rounded-lg">
                        <Inbox className="size-12 text-cyan-100" />
                        <h3>Nenhum blog encontrado.</h3>
                    </div>
                )
            }
        </div >
    )
}