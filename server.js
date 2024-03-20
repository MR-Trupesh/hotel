const express = require('express')
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.use(bodyparser.json());
const MenuItrm = require('./models/Menuitem');

app.get('/', function(req, res) {
    res.send('Hello Trupesh')
})

const personRoutes = require('./routes/personRoutes');
const menuitemRoutes = require('./routes/menuitemRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuitemRoutes);

app.listen(PORT, () => {
    console.log('listening on port 4000');
})