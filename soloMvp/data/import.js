const fs = require("fs");
const db = require("../server/knex.js");
async function importData() {
  try {
    const tribes = JSON.parse(fs.readFileSync("data/tribes.json"));

    for (const tribe of tribes) {
      let name = tribe.name;
      let language = tribe.language;
      let location = tribe.location;
      let population = tribe.population;
      let latitude = tribe.latitude;
      let longitude = tribe.longitude;

      const result = await db("tribe").insert({
        name,
        language,
        location,
        population,
        latitude,
        longitude
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
}
module.exports = { importData };
