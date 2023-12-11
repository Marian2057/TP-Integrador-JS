const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(require("./src/routes/mainRoutes"));
app.use(require("./src/routes/shopRoutes"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.listen(4000,() => console.log ("Servidor corriendo en http://localhost:4000"));