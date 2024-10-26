const express = require('express')
const connectDB = require('./middleware/connectDB');
const { mongo } = require('mongodb')
const app = express()
const cors = require('cors');
const port = 8080

// ROUTES
const api = require("./routes/root");

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
