const { getItems, getItem, createItem, editItem, deleteItem } = require('../models/product.model');

const adminControllers = {

    admin: async (req, res) => {

        try {
            const products = await getItems();
            res.render('../views/admin/admin', { products });
        } catch (error) {
            console.error('Error al obtener los items:', error);
            res.status(500).send('Error al obtener los items');
        }
    },

    createView: (req, res) => res.render('../views/admin/create'),

    create: async (req, res) => {
        try {
            const data = {
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                price: req.body.product_price,
                stock: req.body.stock,
                discount: req.body.discount,
                sku: req.body.product_sku,
                dues: req.body.instalment,
                licence_id: req.body.licence_name,
                category_id: req.body.category_name,
                image_front: '/coming_soon.jpg',
                image_back: '/coming_soon.jpg'
            }
            const newItem = await createItem(data);
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al crear el item:', error);
            res.status(500).send('Error al crear el item');
        }
    },

    editView: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await getItem(id);
            res.render('../views/admin/edit', { product });
        } catch (error) {
            console.error('Error al crear el item:', error);
            res.status(500).send('Error al crear el item');
        }
    },

    edit: async (req, res) => {

        try {
            const id = req.params.id;
            const item = {
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                price: req.body.product_price,
                stock: req.body.stock,
                discount: req.body.discount,
                sku: req.body.product_sku,
                dues: req.body.instalment,
                licence_id: req.body.licence_name,
                category_id: req.body.category_name
            }
            const editedItem = await editItem(item, id);
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al editar el item:', error);
            res.status(500).send('Error al editar el item');
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const itemDeleted = await deleteItem(id);
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al eliminar el item:', error);
            res.status(500).send('Error al eliminar el item');
        }
    }
}

module.exports = adminControllers;