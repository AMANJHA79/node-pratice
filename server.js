require('dotenv').config();
const express = require('express');
const connectToDb = require('./database/db');
const router = require('./routes/book-routes');

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use('/api/books', router);



const serverConnect= async () => {
    await connectToDb();
    app.listen(port, () => console.log(`Server running on port ${port}`));

}
serverConnect();