const { getItems } = require('../models/product.model');

const mainControllers = {
    
    home: async (req, res) => {
        try {
            const characters = await getItems();
            res.render('index', { characters }); 
        } catch (error) {
            console.error('Error al obtener los items:', error);
            res.status(500).send('Error al obtener los items');
        }
    },
    contact: (req, res) => res.send('Route for Contact View'),
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for faqs View')
}

module.exports = mainControllers;