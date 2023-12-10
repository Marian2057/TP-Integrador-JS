const mainControllers = {
    home: (req, res) => res.send('route for Home View'),
    contact: (req, res) => res.send('route for ContactView'),
    about: (req, res) => res.send('route for About View'),
    faqs: (req, res) => res.send('route for Faqs View')
}

module.exports = mainControllers;