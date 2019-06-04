
const express = require('express');
const hbs = require('hbs');
const app = express();
require('./helpers/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {  
    res.render('home',{
        nombre: 'eMmanuel'       
    });
});

app.get('/about', (req, res) => {  
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})




