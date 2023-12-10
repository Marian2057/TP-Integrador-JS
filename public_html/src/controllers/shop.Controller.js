const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    item: (req, res) => res.send('Route for find and retrieve a product from an ID'),
    add: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => res.send('Route for Cart view'),
}

module.exports = shopControllers;