const { Model } = require("objection");

class UserType extends Model {
  static get tableName() {
    return "user_types";
  }
  static get idColumn() {
    return "user_type_id";
  }
}

module.exports = UserType;
