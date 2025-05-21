import { Avatar } from "@/components/avatar"
import { Post } from "contentlayer/generated"
import Image from "next/image"
import Link from "next/link"

type Props = Omit<Post, '_id' | '_raw' | 'type' | 'body'>
export const BlogCard = ({ slug, title, description, date, banner, author }: Props) => {
    return (
        <Link href={`/blog/${slug}`}>
            <article className="bg-gray-600 border border-gray-400 rounded-xl p-2 gap-4 flex flex-col group hover:border-blue-200 cursor-pointer">
                <figure className="rounded-[6px] relative grid place-items-center overflow-hidden">
                    <span className="text-gray-300 text-body-xs p-2 rounded-bl-[10px] bg-gray-600 absolute top-0 right-0 z-[1]">{(new Date(date)).toLocaleDateString('pt-br')}</span>
                    <Image
                        src={banner}
                        width={288}
                        height={144}
                        alt={`Banner do post ${title}`}
                        className="size-full min-h-36 object-cover object-center group-hover:scale-105 transition-transform"
                    />
                </figure>

                <div className="flex flex-col gap-3 px-2">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-sans text-heading-xs text-gray-100">{title}</h3>
                        <p className="text-body-xs text-gray-300 text-ellipsis line-clamp-2">{description}</p>
                    </div>

                    <div className="py-3">
                        <Avatar.Root>
                            <Avatar.Image
                                src={String(author.avatar).trim()}
                                size="xs"
                                alt={`Avatar do ${author.name}`}
                            />

                            <Avatar.Info>
                                <Avatar.Title>{author.name}</Avatar.Title>
                            </Avatar.Info>
                        </Avatar.Root>
                    </div>
                </div>
            </article>
        </Link>
    )
}