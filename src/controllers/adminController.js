const adminControllers = {

    admin: (req, res) => res.send('Route for admin View'),
    createView: (req, res) => res.send('Route for Create View'),
    create: (req, res) => res.send('Route for adding a new item'),
    editView: (req, res) => res.send('Route for Edit View'),
    edit: (req, res) => res.send('Route for editing item'),
    delete: (req, res) => res.send('Route for deleting item')
}

module.exports = adminControllers;