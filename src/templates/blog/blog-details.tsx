import { Avatar } from "@/components/avatar"
import { Markdown } from "@/components/markdown/markdown"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { PostShare } from "./post-share"
import { Post } from "contentlayer/generated"

type Props = {
    post: Post
}
export const BlogDetails = ({ post }: Props) => {
    return (
        <div className="flex flex-col container gap-14 pt-20 pb-32">
            <Breadcrumb className="w-fit">
                <BreadcrumbList>

                    <BreadcrumbItem className="text-action-sm text-zinc-100">
                        <BreadcrumbLink asChild>
                            <Link href="/blog">
                                Blog
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator className="text-gray-300" />

                    <BreadcrumbItem className="text-action-sm text-blue-200">
                        {post.title}
                    </BreadcrumbItem>

                </BreadcrumbList>
            </Breadcrumb>

            <main className="grid md:grid-cols-[1fr_250px] gap-6">
                <article className="flex flex-col bg-gray-600 border-gray-400 border rounded-xl overflow-hidden">
                    <figure className="aspect-video w-full relative">
                        <Image
                            src={post.banner}
                            alt={`Banner do post ${post.title}`}
                            fill
                            className="object-cover"
                        />
                    </figure>

                    <div className="px-16 py-12 gap-12 flex flex-col">
                        <div className="flex flex-col gap-8 text-balance">
                            <h1 className="text-heading-xl font-sans text-gray-100">{post.title}</h1>
                            <Avatar.Root>
                                <Avatar.Image
                                    src={String(post.author.avatar).trim()}
                                    size="sm"
                                    alt={`Avatar do ${post.author.name}`}
                                />

                                <Avatar.Info>
                                    <Avatar.Title>{post.author.name}</Avatar.Title>
                                    <Avatar.Description>Publicado em <time dateTime={(new Date(post.date)).toString()}>{(new Date(post.date)).toLocaleDateString('pt-br')}</time></Avatar.Description>
                                </Avatar.Info>
                            </Avatar.Root>
                        </div>

                        <Markdown content={post.body.raw} />
                    </div>
                </article>
                <PostShare postUrl={`http://localhost:3000/blog/${post.slug}`} postTitle={post.title}/>
            </main>
        </div>
    )
}