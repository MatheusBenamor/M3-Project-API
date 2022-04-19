const { Schema, model } = require("mongoose");

const analysisSchema = new Schema(
  {
    strengths: {
      type: array,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
    weaknesses: {
      type: array,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
    opportunities: {
      type: array,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
    threats: {
      type: array,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
  },
  {
    timestamp: true,
  }
);

module.exports = model ('Analysis', analysisSchema);