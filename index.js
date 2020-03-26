// Imports
const express = require('express');
const app = express();
const dotenv = require('dotenv');

// System Configuration
dotenv.config();

// Global Variables
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
