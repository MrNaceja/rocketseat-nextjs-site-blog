'use client'

import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren<LinkProps & {

}>
export const ActiveLink = ({ children, href, ...linkProps }: Props) => {
    const linkPath = typeof href === 'string' ? href : href.pathname;
    const pathname = usePathname();
    const isActive = pathname === linkPath || pathname?.startsWith(`${linkPath}/`);

    return (
        <Link href={href} className={cn(
            'text-action-sm transition-colors hover:text-blue-200', 
            isActive ? 'text-blue-200' : 'text-zinc-100'
        )} {...linkProps}>{ children }</Link>
    )
}