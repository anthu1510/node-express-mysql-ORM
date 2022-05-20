/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("userRole", (table) => {
      table.increments();
      table.string("name", 255).notNullable();
      table.enu("status", [0, 1]).defaultTo(1);
      table.timestamps(true, true);
    })
    .createTable("users", (table) => {
      table.increments();
      table.integer("roleId").notNullable().references("id").inTable("userRole").index();
      table.string("name", 255).notNullable();
      table.string("email", 512).notNullable();
      table.bigInteger("mobile").notNullable();
      table.string("password", 1024).notNullable();
      table.enu("status", [0, 1]).defaultTo(1);
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user_role").dropTableIfExists("users");
};
