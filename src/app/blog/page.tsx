import { Blog } from "@/templates/blog"
import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsionar seu negócio',
  openGraph: {
    title: 'Blog',
    description: 'Dicas e estratégias para impulsionar seu negócio',
  }
}

export default async function BlogPage() {
    return <Blog posts={allPosts} />
}