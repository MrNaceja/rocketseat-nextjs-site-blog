import { Blog } from "@/templates/blog"
import { allPosts, Post } from "contentlayer/generated"
import { GetStaticProps } from "next"

export const getStaticProps = (async () => {
    return {
        props: {
            posts: allPosts
        }
    }
}) satisfies GetStaticProps<Props>

export type Props = {
    posts: Post[]
}
export default function BlogPage({ posts }: Props) {
    return <Blog posts={posts || []} />
}