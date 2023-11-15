"use client"
import BreadCrumps from "@common/components/breadCrumps";
import Button from "@common/components/button";
import { formatPrice } from "@common/utils";
import { useItemDetail } from "@modules/items/application/hooks";
import { useParams } from "next/navigation";

export default function ItemDetailPage() {

    const params = useParams();
    const {id} = params;
    const item = useItemDetail(id as string);

    if (!item) return <div className="grid place-content-center h-full absolute w-full top-0 left-0">Cargando...</div>

    const {picture, condition, soldQuantity, title, price: {amount, currency}, description} = item;
    const isNew = condition === 'new';
    const formattedPrice = formatPrice(amount, currency);
    return (
        <div className="w-full max-w-screen-lg mx-auto my-2 flex flex-col gap-2">
            <BreadCrumps items={item.categories}/>
            <div className="bg-white rounded">
                <div className="flex gap-small flex-col sm:flex-row">
                    <div
                        className="sm:ml-small sm:mt-small bg-white rounded bg-center bg-contain max-w-full w-lg-image h-lg-image bg-no-repeat"
                        style={{backgroundImage: `url('${picture}')`}}
                    />
                    <div className="p-medium flex-1">
                        <span className="text-sm text-xdark-gray mb-small">{isNew ? 'Nuevo' : 'Usado'} • {soldQuantity} vendidos </span>
                        <h2 className="text-2xl font-bold mb-medium">{title}</h2>
                        <h1 className="text-4xl font-semibold mb-medium">{formattedPrice}</h1>
                        <Button>
                            Comprar
                        </Button>
                    </div>
                </div>
                <div className="p-medium gap-medium flex flex-col">
                    <h2 className="text-2xl font-semibold">Descripción del producto</h2>
                    <p className="text-dark-gray">
                        {description || "Este producto no tiene descripción"}
                    </p>
                </div>
            </div>
        </div>
    );
}
