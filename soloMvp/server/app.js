const express = require("express");
const path = require("path");
const db = require("./knex");
const cors = require("cors");
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname)));

app.use(cors());
app.get("/api", async (req, res) => {
  //return filtered locations
  try {
    const name = req.query.name;
    const language = req.query.language;
    const location = req.query.location;
    const population = req.query.population;
    const tribe = await db
      .select()
      .where({
        name: name,
        language: language,
        location: location,
        population: population
      })
      .from("tribe");
    console.log(`tribes:${tribe}`);
    res.json(tribe);
  } catch (err) {
    console.error("Error loading tribes!", err);
    res.sendStatus(500);
  }
});

app.get("/api/tribes", async (req, res) => {
  //return all tribes
  try {
    const tribe = await db.select().from("tribe");
    console.log(`tribe:${tribe}`);
    res.json(tribe);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, ".."));
});

module.exports = app;
