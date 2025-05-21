import { PropsWithChildren } from "react"

type Props = PropsWithChildren
export const AvatarInfo = ({ children }: Props) => {
    return (
        <div className="flex flex-col">{ children }</div>
    )
}