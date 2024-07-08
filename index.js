const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const path = require('path');

app.use(cors());

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'aditya_resume.pdf');
    res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
