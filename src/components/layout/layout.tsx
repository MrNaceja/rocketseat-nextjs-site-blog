import { PropsWithChildren } from "react"

import { Header } from "./header"
import { CallToAction } from "./call-to-action";
import { Footer } from "./footer"

import { Inter, PT_Sans_Caption } from 'next/font/google';

const inter_font = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-inter'
});

const pt_sans_font = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-sans'
})

type Props = PropsWithChildren
export const Layout = ({ children }: Props) => {
    return (
        <section className={`${inter_font.variable} ${pt_sans_font.variable} font-inter flex flex-col relative items-center justify-center min-h-screen`}>
            <Header />
            <main className="flex-1 flex flex-col mt-24 w-full">
                {children}
            </main>
            <CallToAction />
            <Footer />
        </section>
    )
}