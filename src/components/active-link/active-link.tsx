import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren<LinkProps & {

}>
export const ActiveLink = ({ children, href, ...linkProps }: Props) => {
    const router = useRouter()
    const isActive = router.asPath === href || router.asPath.startsWith(href.toString())

    return (
        <Link href={href} className={cn(
            'text-action-sm transition-colors hover:text-blue-200', 
            isActive ? 'text-blue-200' : 'text-zinc-100'
        )} {...linkProps}>{ children }</Link>
    )
}