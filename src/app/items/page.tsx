"use client"
import BreadCrumps from "@common/components/breadCrumps";
import ResultItem from "@common/components/resultItem";
import { useItems } from "@modules/items/application/hooks";
import { useRouter, useSearchParams } from "next/navigation";

export default function ItemsPage() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    const [items, isLoading] = useItems(search);




    return (
        <div className="w-full max-w-screen-lg mx-auto my-small flex flex-col gap-small">
            <BreadCrumps items={items[0]?.categories || []}/>
            <div>
                {(items.length && isLoading) ? (
                    items.map((item) => (
                        <ResultItem
                            onClick={() => {
                                router.push(`/items/${item.id}`)
                            }}
                            key={item.id}
                            item={item}
                        />
                    ))
                ) : (
                    <div className="absolute top-0 left-0 w-full h-full grid place-content-center pointer-events-none">
                        <p>
                            {isLoading ? "No se encontraron productos" : "cargando..."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
