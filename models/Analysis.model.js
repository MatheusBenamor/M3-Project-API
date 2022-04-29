const { Schema, model } = require("mongoose");

const analysisSchema = new Schema(
  {
    analysisName: {
      type: String,
      required: true,
    },
    strengths: {
      elements: [{
        type: String
    }],
    },
    weaknesses: {
      elements: [{
        type: String
    }],
    },
    opportunities: {
      elements: [{
        type: String
    }],
    },
    threats: {
      elements: [{
        type: String
    }],
    },
    //Formato: [{type: String}]
  },
  {
    timestamp: true,
  }
);

module.exports = model("Analysis", analysisSchema);
