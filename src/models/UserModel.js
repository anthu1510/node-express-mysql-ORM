const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }
  static get idColumn() {
    return "user_id";
  }
  // This object defines the relations to other models.
  static get relationMappings() {
    const UserType = require("./UserTypesModel");
    return {
      userType: {
        relation: Model.HasOneRelation,
        // The related model. This can be either a Model
        // subclass constructor or an absolute file path
        // to a module that exports one. We use a model
        // subclass constructor `Animal` here.
        modelClass: UserType,
        join: {
          from: "users.user_type",
          to: "user_types.user_type_id",
        },
      },
    };
  }
}

module.exports = User;
