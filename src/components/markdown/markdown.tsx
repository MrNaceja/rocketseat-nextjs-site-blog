import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
    content: string
}
export const Markdown = ({ content }: Props) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                h1: ({ children }) => <h1 className='text-heading-md text-gray-100'>{ children }</h1>,
                p: ({ children }) => <p className='text-gray-200'>{ children }</p>,
                strong: ({ children }) => <strong className='text-gray-200 font-bold'>{ children }</strong>,
                a: ({ children, href }) => <a href={href} className='text-blue-200 hover:underline'>{ children }</a>
            }}
        >
            {content}
        </ReactMarkdown>
    )
}