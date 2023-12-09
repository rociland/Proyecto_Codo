const path = require('path');
const fs = require('fs');
const { getItems, getItem } = require('../models/product.model');

const shopControllers = {

    shop: async (req, res) => {
        /*try {
            const characters = await getItems();
            res.render('../views/shop/shop', { characters });   
        } catch (error) {
            console.error('Error al obtener los items:', error);
            res.status(500).send('Error al obtener los items');
        }*/
        const data = fs.readFileSync(path.resolve(__dirname, '../data/characters.json'));
        const characters = JSON.parse(data);
        res.render('../views/shop/shop', { characters });   
    },
    item: (req, res) => res.render('../views/shop/item'),
    addItem: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => res.render('../views/shop/cart'),
    cartCheckout: (req, res) => res.send('Route for go to checkout page')
}

module.exports = shopControllers;