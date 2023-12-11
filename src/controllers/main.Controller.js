const index = (req, res) => res.render('index');
const contact = (req, res) => res.render('shop/contact');
const about = (req, res) => res.send('Esta sería la vista de About');
const faqs = (req, res) => res.send('Esta sería la vista de Faqs');

module.exports = {
    index,
    contact,
    about,
    faqs,
};