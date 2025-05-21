import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"

const sizes: Record<Props['size'], string> = {
    xs: 'size-5',
    sm: 'size-9'
}

type Props = Omit<ImageProps, 'width' | 'height'> & {
    size: 'xs' | 'sm'
}
export const AvatarImage = ({ size = 'sm', alt = 'Avatar', ...imageProps }: Props) => {
    return (
        <figure className={cn('relative rounded-full border border-blue-200', sizes[size])}>
            <Image
                alt={alt}
                fill
                className="object-cover"
                {...imageProps}
            />
        </figure>
    )
}