'use client'

import { cn } from "@/lib/utils"
import { CircleX, SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, InputHTMLAttributes, useEffect, useRef } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>
export const Search = ({ className, ...inputProps }: Props) => {
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
    const search_params = useSearchParams();
    const has_search = search_params?.has('search')

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const search = e.target.value
        updateQuerySearch(search)
      
    }

    const updateQuerySearch = (search?: string) => {
        const url = new URL(location.toString())

        if (search) {
            url.searchParams.set('search', search)
        }
        else {
            url.searchParams.delete('search')
        }

        router.push(url.toString(), {
            scroll: false
        })
    }

    const handleCleanSearch = () => {
        if ( inputRef.current ) {
            inputRef.current.value = ''
        }
        updateQuerySearch();
    }

    useEffect(() => {
        if ( has_search ) {
            inputRef.current?.focus()
        }
    }, [has_search])
    return (
        <form className={cn("flex items-center px-4 py-3 rounded-lg border border-gray-400 gap-3 group focus-within:border-blue-300", className)}>
            <input
                ref={inputRef}
                type="text"
                onChange={handleChangeSearch}
                className="flex-1 bg-transparent border-none focus:outline-none text-body-sm text-gray-100 placeholder-gray-300 peer"
                {...inputProps}
            />
            <SearchIcon className="size-4 group-focus-within:text-blue-300 text-blue-200 peer-placeholder-shown:text-gray-300 order-first" />
            <CircleX
                className="size-4 text-gray-300 order-last peer-placeholder-shown:invisible visible cursor-pointer"
                onClick={handleCleanSearch}
            />
        </form>
    )
}