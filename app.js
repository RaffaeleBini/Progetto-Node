const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sanitize = require('./middleware/sanitize');

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');

const app = express();
app.use(bodyParser.json());
app.use(sanitize);

// Welcome route (GET /)
app.get('/', (req, res) => {
  res.send('Welcome to the Planty of Food API!');
});

app.use('/routes/product', productRoutes);
app.use('/routes/user', userRoutes);
app.use('/routes/order', orderRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/pof', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});