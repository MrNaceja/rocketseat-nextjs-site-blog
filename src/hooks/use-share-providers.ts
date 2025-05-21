import { IconName } from 'lucide-react/dynamic'
import { useCallback, useEffect, useMemo, useState } from 'react'

type ShareProviderConfig = {
    name: string,
    icon: IconName,
    share_url: (url: string) => string
}

type ShareProviders = (keyof typeof share_providers)

const share_providers: Record<string, ShareProviderConfig> = {
    linkedin: {
        name: 'Linkedin',
        icon: 'linkedin',
        share_url: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    facebook: {
        name: 'Facebook',
        icon: 'facebook',
        share_url: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    slack: {
        name: 'Slack',
        icon: 'slack',
        share_url: (url) => `https://slack.com/share?url=${encodeURIComponent(url)}`
    }
}

type Props = {
    url_share: string,
    title: string,
}
export const useShareProviders = ({ url_share, title }: Props) => {
    const [clipboardCopied, setClipboardCopied] = useState(false);

    const copyToClipboard = useCallback(async () => {
        if (!('navigator' in window) || (('navigator' in window) && !('clipboard' in window.navigator))) {
            throw new Error('Copy to Clipboard não suportado');
        }

        try {
            await navigator.clipboard.writeText(url_share)
        }
        catch (e) {
            console.error('Falha ao copiar', e)
            setClipboardCopied(false);
            return false;
        }

        setClipboardCopied(true)
        return true;
    }, [url_share])

    const shareAction = useCallback(async (provider: ShareProviders) => {
        try {
            const config = share_providers[provider]

            if (!config) {
                throw new Error(`Share Provider não suportado (${provider})`)
            }

            const share_window = window.open(config.share_url(url_share), title, 'width=600,height=600')

            return !!share_window
        }
        catch (e) {
            console.error(e)
            return false
        }
    }, [url_share, title])


    useEffect(() => {
        if (clipboardCopied) {
            const timeout_copy = setTimeout(() => {
                setClipboardCopied(false)
            }, 2000)
            return () => clearTimeout(timeout_copy)
        }

    }, [clipboardCopied])
    return useMemo(() => Object.entries(share_providers).map(([provider, { name, icon }]) => ({
        name,
        icon,
        action: () => shareAction(provider)
    })).concat([{
        name: clipboardCopied ? 'Copiado!' : 'Copiar Link',
        icon: clipboardCopied ? 'check' : 'link',
        action: copyToClipboard,
    }]), [shareAction, clipboardCopied, copyToClipboard])
}