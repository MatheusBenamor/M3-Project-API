const { model, Schema } = require("mongoose");

//Consultar se esse é um modelo válido e se é a melhor forma de devolver as 3 possiveis respostas.
const  feedbackSchema = new Schema(
    {
        safe: {
            type: String,
          },
          moderate: {
            type: String,
          },
           risky: {
            type: String,
          }
        },
          {
            timestamp: true,
          }
);

module.exports = model("Feedback", feedbackSchema);