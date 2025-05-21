import { Loader2 } from "lucide-react";

export default function RootLoading() {
    return (
        <div className="py-14 flex flex-col gap-2 h-[75vh] w-full items-center justify-center">
            <Loader2 className="text-cyan-100 animate-spin" size={96}/>
            <h4 className="text-gray-300 text-body-md animate-pulse">Aguarde...</h4>
        </div>
    )
}