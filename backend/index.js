const express = require('express')
const connectDB = require('./middleware/connectDB');
const app = express()
const cors = require('cors');
const port = 8080

// ROUTES
const api = require("./routes/root");

connectDB();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
