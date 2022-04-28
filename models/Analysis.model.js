const { Schema, model } = require("mongoose");

const analysisSchema = new Schema(
  {
    analysisName: {
      type: String,
      required: true,
    },
    strengths: {
      maxItems: 5,
      elements: [{
        type: String
    }],
    },
    weaknesses: {
      maxItems: 5,
      elements: [{
        type: String
    }],
    },
    opportunities: {
      maxItems: 5,
      elements: [{
        type: String
    }],
    },
    threats: {
      maxItems: 5,
      elements: [{
        type: String
    }],
    },
    //teste: [{type: String}]
  },
  {
    timestamp: true,
  }
);

module.exports = model("Analysis", analysisSchema);
