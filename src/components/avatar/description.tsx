import { PropsWithChildren } from "react"

type Props = PropsWithChildren
export const AvatarDescription = ({ children }: Props) => {
    return <span className="text-body-xs text-gray-300">{ children }</span>
}