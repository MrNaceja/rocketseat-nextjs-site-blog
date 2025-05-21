import { Blog } from "@/templates/blog"
import { allPosts } from "contentlayer/generated"

export default async function BlogPage() {
    const posts = allPosts
    return <Blog posts={posts} />
}