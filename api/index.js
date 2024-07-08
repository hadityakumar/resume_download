const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../aditya_resume.pdf');
    res.sendFile(filePath);
});

module.exports.handler = serverless(app);
