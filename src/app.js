const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const bookRoutes = require('./routes/bookRoutes'); // Ensure the correct import path

const app = express();
const port =3000

// Middleware
app.use(bodyParser.json());

// Routes


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Bookcatalogue', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
const bookRoutes = require('./api/bookRoutes')
app.use('/books', bookRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
