import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";

export default function RootNotFound() {
    return (
        <div className="h-[75vh] flex flex-col gap-4 items-center justify-center py-14">
            <div className="flex items-center gap-1 text-zinc-100 text-9xl font-bold">
                <span className="-rotate-12">4</span>
                <FileQuestion size={128} className="animate-bounce" />
                <span className="rotate-12">4</span>
            </div>
            <h4 className="text-gray-300 text-heading-md font-medium">Além dos limites!</h4>

            <Button asChild>
                <Link href="/">
                    <ArrowLeft />
                    Voltar para os limites
                </Link>
            </Button>
        </div>
    )
}