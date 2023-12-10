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
                category_id: req.body.category_name
            }
            const newItem = await createItem(data);
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al crear el item:', error);
            res.status(500).send('Error al crear el item');
        }
    },
    

    editView: async (req, res) => {
        const id = req.params.id;
        const { data: categories } = await CategoryService.getallItemsCategories();
        const { data: licence } = await  LicenceService.getallItemsLicences();
        const { data } = await  ItemsService.getItem (id);
        console.log(categories, licences);
        res.render ('../views/admin/edit' , { product:product,
        item: data [0], 
        categories,
        licences
        }); 
    },





    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const itemDeleted = await deleteItem(id);
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al obtener los items:', error);
            res.status(500).send('Error al obtener los items');
        }
    }
}

module.exports = adminControllers;