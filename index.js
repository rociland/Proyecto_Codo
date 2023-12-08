const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

require('dotenv').config();

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));