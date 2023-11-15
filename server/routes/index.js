const express = require('express');
const router = express.Router();

router.get('/items', async (req, res) => {
    try {
        const {default: got} = await import('got');

        const query = req.query.q || '';
        const response = await got(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).json();

        const result = response.results.slice(0, 4);

        const categoriesPromises = result.map(async item => {

            const categoryId = item.category_id;
            if (!categoryId) return;

            const response = await got(`https://api.mercadolibre.com/categories/${categoryId}`).json();

            return response.path_from_root?.map(path => path.name) || [];
        });
        const categories = await Promise.all(categoriesPromises);

        res.send({
            author: {
                name: '',
                lastname: ''
            },
            categories: categories[0],
            items: result.map((item, index) => ({
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: item.price - Math.trunc(item.price),
                },
                picture: item.thumbnail,
                condition: item.condition,
                'free_shipping': item.shipping.free_shipping,
                city: item.seller_address?.city?.name,
                categories: categories[index]
            }))
        });

    } catch(err) {
        res.status(500).send({message: "server error"});
    }
});

router.get('/items/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {default:got} = await import('got');

        let soldQuantity = 0;
        let responseDescription = '';
        let item;
        let categories = [];

        try {
            item = await got(`https://api.mercadolibre.com/items/${id}`).json();
        } catch(err) {
            return res.status(404).send({message: "The item was not found"});
        }


        const uris = [
            `https://api.mercadolibre.com/sites/MLA/search?q=${item?.title}`,
            `https://api.mercadolibre.com/items/${id}/description`,
            `https://api.mercadolibre.com/categories/${item?.category_id}`
        ];

        const promises = uris.map(uri => got(uri).json());

        const [searchResult, descriptionResult, categoryResult] = await Promise.allSettled(promises);

        if (searchResult.value) {
            const itemFound = searchResult.value.results.find(item => item.id === id);
            if (itemFound?.sold_quantity) {
                soldQuantity = itemFound.sold_quantity;
            }
        }
        if (descriptionResult.value?.plain_text) {
            responseDescription = descriptionResult.value.plain_text;
        }

        if (categoryResult.value.path_from_root?.length) {
            categories = categoryResult.value.path_from_root.map(category => category.name);
        }

        if (!item) return res.status(404).send({message: "Item not found"});

        const price = item.price || 0;

        res.send({
            author: {
                name: '',
                lastname: ''
            },
            item: {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: price - Math.trunc(price),
                },
                picture: item.pictures?.[0]?.url,
                condition: item.condition,
                free_shipping: item.shipping?.free_shipping,
                sold_quantity: soldQuantity,
                description: responseDescription,
                categories
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).send({message: "server error"});
    }
});


module.exports = router;
