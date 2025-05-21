'use client'

import { Button } from "@/components/ui/button";
import { useShareProviders } from "./hooks/use-share-providers";
import { DynamicIcon } from "lucide-react/dynamic";

type Props = {
    postUrl: string,
    postTitle: string
}
export const PostShare = ({ postUrl, postTitle }: Props) => {
    const share_provider_options = useShareProviders({ url_share: postUrl, title: postTitle });

    return (
        <aside className="flex flex-col gap-5">
            <h2 className="text-heading-xs text-gray-100">Compartilhar</h2>

            <ul className="w-fit md:w-full gap-2 flex md:flex-col">
                {
                    share_provider_options.map((share_provider_option) => (
                        <li key={share_provider_option.name} className="w-full">
                            <Button variant="outline" onClick={share_provider_option.action} className="w-fit md:w-full justify-start">
                                <DynamicIcon name={share_provider_option.icon} />
                                <span className="hidden md:block">{share_provider_option.name}</span>
                            </Button>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}