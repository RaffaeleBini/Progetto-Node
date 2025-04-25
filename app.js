const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');

const app = express();
app.use(bodyParser.json());
app.use(mongoSanitize());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

mongoose.connect('mongodb://localhost:27017/pof', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000, () => console.log('API server running on http://localhost:3000'));
