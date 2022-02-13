const express = require('express');
const cors = require('cors');
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(require("./routes/api"));

const db = require("./config/db");

app.listen(port, () => {
    db.connect((err) => {
        console.log(err);
    });

    console.log(`Server is running on port ${port}`);
});