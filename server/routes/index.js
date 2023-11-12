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
                    decimals: 0,
                },
                picture: item.thumbnail,
                condition: item.condition,
                'free_shipping': item.shipping.free_shipping
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

        const response = await got(`https://api.mercadolibre.com/items/${id}`).json();
        const responseDescription = await got(`https://api.mercadolibre.com/items/${id}/description`).json();

        const item = response;
        console.log({item});

        if (!item) return res.status(404).send({message: "Item not found"});

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
                    decimals: 0,
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping?.free_shipping,
                sold_quantity: item.sold_quantity,
                description: responseDescription.text,
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).send({message: "server error"});
    }
});


module.exports = router;
