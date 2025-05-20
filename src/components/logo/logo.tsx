import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/" title="Página inicial">
            <Image
                src='/logo.svg'
                width={116}
                height={32}
                alt="Logomarca do Site"
            />
        </Link>
    )
}