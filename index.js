const express = require('express');
const app = express();
const pool = require("./db.js");

app.use(express.json());

// ROUTES

app.get("/", (req,res) => {
    const result = {'text': 'Okay'};

    res.json(result);
});

// get all cities
app.get("/city", async (req,res) => {
    try {
        const allCities = await pool.query("SELECT * FROM city");

        res.json(allCities.rows);
    } catch(err) {
        console.error(err.message);
    }   
});

// get a city
app.get("/city/:id", async (req,res) => {
    const { id } = req.params;
    try {
        const city = await pool.query("SELECT * FROM city WHERE id = $1", [id]);

        res.json(city.rows[0]);
    } catch(err) {
        console.error(err.message);
    }   
});

// create a city
app.post("/city", async (req,res) => {
    try {
        const { name, description } = req.body;
        // await
        const city = await pool.query("INSERT INTO city (name,description) VALUES ($1,$2) RETURNING *", 
        [name,description]);

        res.json(city.rows[0]);
    } catch(err) {
        console.error(err.message);
    }   
});

// update a city
app.put("/city/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const updateCity = await pool.query("UPDATE city SET name = $1, description = $2 WHERE id = $3", [name, description, id]);

        const result = {"text": "City was updated"};
        res.json(result);
    } catch(err) {
        console.error(err.message);
    }   
});

// delete a city
app.delete("/city/:id", async (req,res) => {
    try {
        const { id } = req.params;

        const deleteCity = await pool.query("DELETE FROM city WHERE id = $1", [id]);

        const result = {"text": "City was deleted"};
        res.json(result);
    } catch(err) {
        console.error(err.message);
    }   
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});