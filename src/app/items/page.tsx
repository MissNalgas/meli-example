"use client"
import BreadCrumps from "@common/components/breadCrumps";
import ResultItem from "@common/components/resultItem";
import { useRouter } from "next/navigation";

export default function ItemsPage() {

    const router = useRouter();

    return (
        <div className="w-full max-w-screen-lg mx-auto my-small flex flex-col gap-small">
            <BreadCrumps/>
            <div>
                {[...Array(4)].map((_, i) => (
                    <ResultItem
                        onClick={() => {
                            router.push(`/items/${i}`)
                        }}
                        key={i}
                    />
                ))}
            </div>
        </div>
    );
}
