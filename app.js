const express = require(`express`);
const path = require(`path`);
const app = express();
const port = 3000;

const menuItems = require(`./utils/allItems`)

const viewsURL = path.join(__dirname, 'views');
app.set('views', viewsURL);
app.set('view engine', 'ejs');

const publicURL = path.join(__dirname, 'public');
app.use(express.static(publicURL));


//Ruta para obtener el Json de toda la base de datos, que contiene todos los elementos de la pagina principal
const generalRouter = require(`./routers/general`)
app.use(generalRouter);

  
app.listen(port, () => {
    console.log('Escuchando en el puerto' + port);
  });
