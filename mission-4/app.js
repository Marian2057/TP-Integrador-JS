const express = require('express');
const app = express();

app.use(express.static('public_html'));


app.get('/home', (req, res) => res.sendFile(__dirname +'/public_html/index.html'));
app.get('/shop', (req, res) => res.sendFile(__dirname +'/public_html/pages/shop/shop.html'));
app.get('/item', (req, res) => res.sendFile(__dirname +'/public_html/pages/shop/item.html'));
app.get('/admin', (req, res) => res.sendFile(__dirname +'/public_html/pages/admin/admin.html'));
app.get('/ping', (req, res) => res.send('pong'));

app.listen(4000,() => console.log ("Servidor corriendo en http://localhost:4000"));