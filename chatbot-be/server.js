const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const api = require('./src/api');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Body parser, reading data from body into req.body
app.use(cookieParser());
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

app.use('/api/v1', api);

// ERROR HANDLER
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/public/404.html'));
});

app.use((error, req, res, next) => {
    let { statusCode, message } = error;

    statusCode = statusCode ? statusCode : 500;

    res.status(statusCode).json({
        statusCode,
        message,
    });
});
