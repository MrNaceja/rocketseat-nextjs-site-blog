import { PropsWithChildren } from "react"

type Props = PropsWithChildren
export const AvatarTitle = ({ children }: Props) => {
    return <strong className="text-body-sm text-gray-200">{ children }</strong>
}