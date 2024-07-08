const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');

app.use(cors());

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../aditya_resume.pdf');
    res.sendFile(filePath);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
