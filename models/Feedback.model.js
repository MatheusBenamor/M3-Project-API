const { model, Schema } = require("mongoose");

//Consultar se esse é um modelo válido e se é a melhor forma de devolver as 3 possiveis respostas.
const  feedbackSchema = new Schema(
    {
        safe: {
            type: String,
            required: true,
            unique: true,
          },
          moderate: {
            type: String,
            required: true,
          },
           risky: {
            type: String,
            required: true,
          }
        },
          {
            timestamp: true,
          }
);