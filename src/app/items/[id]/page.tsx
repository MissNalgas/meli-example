import BreadCrumps from "@common/components/breadCrumps";
import Button from "@common/components/button";

export default function ItemDetailPage() {
    const props = {
        img: 'https://estaticos.elcolombiano.com/binrepository/588x365/0c0/0d0/none/11101/QKNN/untitled-collage_39952160_20220510170605.jpg',
        isNew: true,
        sells: 244,
        name: 'Deco reverse Sombrero Oxford',
        price: '$1.980',
        description: 'Ipsum sint saepe hic consectetur ipsa Ipsum magnam nulla id aliquam eveniet officia rerum Aspernatur accusantium error rem magni officiis? Architecto fuga odit perferendis eligendi quia Debitis eaque temporibus nulla',
    };

    const {img, isNew, sells, name, price, description} = props;
    return (
        <div className="w-full max-w-screen-lg mx-auto my-2 flex flex-col gap-2">
            <BreadCrumps/>
            <div className="bg-white rounded">
                <div className="flex gap-small">
                    <div
                        className="bg-white rounded bg-center bg-contain max-w-full w-lg-image h-lg-image bg-no-repeat"
                        style={{backgroundImage: `url('${img}')`}}
                    />
                    <div className="p-medium">
                        <span className="text-sm text-xdark-gray mb-small">{isNew ? 'Nuevo' : 'Usado'} * {sells} vendidos </span>
                        <h2 className="text-2xl font-bold mb-medium">{name}</h2>
                        <h1 className="text-4xl font-semibold mb-medium">{price}</h1>
                        <Button>
                            Comprar
                        </Button>
                    </div>
                </div>
                <div className="p-medium gap-medium flex flex-col">
                    <h2 className="text-2xl font-semibold">Descripción del producto</h2>
                    <p className="text-dark-gray">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
