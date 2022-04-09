const { model, Schema } = require("mongoose");

//No passwordHash ele não irá salvar a senha, e sim o hash da pessoa.
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = model ('User', userSchema);