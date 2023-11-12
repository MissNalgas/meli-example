const express = require('express');
const router = express.Router();

router.get('/items', async (req, res) => {
    try {
        const {default: got} = await import('got');

        const query = req.query.q || '';
        const response = await got(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).json();

        res.send({
            author: {
                name: '',
                lastname: ''
            },
            categories: response.results.map(item => item.category_id),
            items: response.results.map(item => ({
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
                city: item.seller_address?.city?.name
            })).slice(0, 4)
        });

    } catch(err) {
        res.status(500).send({message: "server error"});
    }
});

router.get('/items/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {default:got} = await import('got');

        let response;
        try {
            response = await got(`https://api.mercadolibre.com/items/${id}`).json()
        } catch (err) {
            res.status(400).send({message: "Item not found"});
        }

        let soldQuantity = 0;
        try {
            const search = await got(`https://api.mercadolibre.com/sites/MLA/search?q=${response?.title}`).json();
            const itemFound = search.results.find(item => item.id === id);
            if (itemFound?.sold_quantity) {
                soldQuantity = itemFound.sold_quantity;
            }

        } catch(err) { console.error(err) }

        let responseDescription
        try {
            responseDescription = await got(`https://api.mercadolibre.com/items/${id}/description`).json();
        } catch(err) {
            responseDescription = {
                text: ''
            };
        }

        const item = response;

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
                description: responseDescription.text,
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).send({message: "server error"});
    }
});


module.exports = router;
