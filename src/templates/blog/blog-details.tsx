import { Avatar } from "@/components/avatar"
import { Markdown } from "@/components/markdown/markdown"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { useShareProviders } from "@/hooks/use-share-providers"
import { Props as BlogDetailsProps } from "@/pages/blog/[slug]"
import { DynamicIcon } from "lucide-react/dynamic"
import Image from "next/image"
import Link from "next/link"

export const BlogDetails = ({ post }: BlogDetailsProps) => {
    const share_provider_options = useShareProviders({ url_share: `http://localhost:3000/blog/${post.slug}`, title: post.title });

    return (
        <div className="flex flex-col container gap-14 pt-20 pb-32">
            <Breadcrumb className="w-fit">
                <BreadcrumbList>

                    <BreadcrumbItem className="text-action-sm text-zinc-100">
                        <BreadcrumbLink>
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

                <aside className="flex flex-col gap-5">
                    <h2 className="text-heading-xs text-gray-100">Compartilhar</h2>

                    <ul className="w-fit md:w-full gap-2 flex md:flex-col">
                        {
                            share_provider_options.map((share_provider_option) => (
                                <li key={share_provider_option.name} className="w-full">
                                    <Button variant="outline" onClick={share_provider_option.action} className="w-fit md:w-full justify-start">
                                        <DynamicIcon name={share_provider_option.icon} />
                                        <span className="hidden md:block">{ share_provider_option.name }</span>
                                    </Button>
                                </li>
                            ))
                        }
                    </ul>
                </aside>
            </main>
        </div>
    )
}