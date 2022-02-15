const express = require("express");
const cors = require("cors");
const router = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/', router);
app.use('*', (req, res) => res.status(404).json({ error: 'Not Found' }));

module.exports = app;