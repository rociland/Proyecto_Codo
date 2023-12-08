const adminControllers = {

    admin: (req, res) => res.render('../views/admin/admin'),
    createView: (req, res) => res.render('../views/admin/create'),
    create: (req, res) => res.send('Route for adding a new item'),
    editView: (req, res) => res.render('../views/admin/edit'),
    edit: (req, res) => res.send('Route for editing item'),
    delete: (req, res) => res.send('Route for deleting item')
}

module.exports = adminControllers;