exports.up = function(knex) {
  return knex.schema.createTable("tribe", table => {
    table.increments().index();

    table.text("name");

    table.text("language");

    table.text("location").nullable();

    table.float("population");

    table.float("latitude");

    table.float("longitude");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tribe");
};
