const adminControllers = {
    admin: (req, res) => res.send('route for admin View'),
    create: (req, res) => res.send('Route for creating a new item'),
    edit: (req, res) => res.send('Route for editing an existing item'),
    delete: (req, res) => res.send('Route for deleting an item')
}

module.exports = adminControllers;