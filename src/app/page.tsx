import { Home } from "@/templates/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Site.Set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: 'https://rocketseat-nextjs-site-blog-nrso.vercel.app/og-site-set.png',
    locale: 'pt_BR',
    type: 'website',
    siteName: 'Site.Set',
    images: [
      {
        url: 'https://rocketseat-nextjs-site-blog-nrso.vercel.app/og-site-set.png',
        alt: 'Site.Set',
        width: 500,
        height: 500
      }
    ]
  }
}

export default async function HomePage() {
  return <Home />
}
