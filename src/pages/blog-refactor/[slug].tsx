import { BlogDetails } from "@/templates/blog/blog-details"
import { allPosts, Post } from "contentlayer/generated"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths = (async () => {
    return {
        paths: allPosts.map(post => ({ params: { slug: post.slug } })),
        fallback: 'blocking'
    }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params }) => {
    const { slug } = params as { slug: string };
    const latest_posts = allPosts.slice(0, 5);

    const post = latest_posts.find(post => post.slug === slug)!;

    return {
        props: { post },
        notFound: !post
    }
}) satisfies GetStaticProps<Props>


export type Props = {
    post: Post
}
export default function BlogDetailsPage({ post }: Props) { 
    return <BlogDetails post={post} />
}