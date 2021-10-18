const express = require('express');
const app = express();
const pool = require("./db.js");

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});