const path = require('path');
const fs = require('fs');
const { getItems, getItem } = require('../models/product.model');

const shopControllers = {

    shop: async (req, res) => {
        try {

            const licenceName = req.query.licence_name;
            let characters;
    
            if (licenceName) {
                characters = (await getItems()).filter(character => character.licence_name === licenceName);
            } else {
                characters = await getItems();
            }

            res.render('../views/shop/shop', { characters });   
        } catch (error) {
            console.error('Error al obtener los items:', error);
            res.status(500).send('Error al obtener los items');
        }  
    },

    item: async (req, res) => {
        
        try {
            const characters = await getItems();
            const id = req.params.id;
            const character = await getItem(id);
        res.render('../views/shop/item', { character, characters })
        } catch (error) {
            console.error('Error al obtener el item:', error);
            res.status(500).send('Error al obtener el item');
        }
    },

    addItem: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => res.render('../views/shop/cart'),
    cartCheckout: (req, res) => res.send('Route for go to checkout page')
}

module.exports = shopControllers;