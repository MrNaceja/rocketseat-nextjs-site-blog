import { PropsWithChildren } from "react"

type Props = PropsWithChildren
export const AvatarContainer = ({ children }: Props) => {
    return (
        <div className="flex items-center gap-3">{ children }</div>
    )
}