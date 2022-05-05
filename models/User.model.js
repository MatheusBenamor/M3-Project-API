const { model, Schema } = require("mongoose");

//No passwordHash ele não irá salvar a senha, e sim o hash da pessoa.
//No image o tipo é string pois o que ele vai pegar é a URL da imagem.
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    passwordHash: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = model("User", userSchema);
